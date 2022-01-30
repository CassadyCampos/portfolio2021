import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Button from '../../components/Button.jsx';
import styles from '../../styles/Blog.module.css';
import Image from 'next/image';

const PostPage = ({ frontMatter: { title, thumbnailUrl }, mdxSource }) => {
    return (
        <div className="mt-4 d-flex flex-wrap justify-content-center">
            <h1
                className={
                    styles.baseFont +
                    ' display-4 py-4 text-center'
                }
            >
                {title}
            </h1>
            <div className={'col-10'}>
                <Image
                    src={thumbnailUrl}
                    className="col-md-8, col-sm-12 img-fluid mt-1 rounded"
                    alt="thumbnail"
                    width={1000}
                    height={360}
                    objectFit="cover"
                />
                <div className={styles.dateText}>December 12, 2021</div>
                <br/>
                <MDXRemote
                    className={styles.baseFont}
                    {...mdxSource}
                    components={{ Button, SyntaxHighlighter }}
                />
            </div>
        </div>
    );
};
export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.mdx', ''),
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.mdx'),
        'utf-8'
    );

    const { data: frontMatter, content } = matter(markdownWithMeta);
    const mdxSource = await serialize(content);
    return {
        props: {
            frontMatter,
            slug,
            mdxSource,
        },
    };
};

export default PostPage;
