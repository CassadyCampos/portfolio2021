import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Button from '../../components/Button.jsx';
import styles from '../../styles/TextStyles.module.css';
import Image from "next/image";
import 'animate.css'

const PostPage = ({ frontMatter: { title, date, thumbnailUrl, sidePics }, mdxSource }) => {
    return (
        <div className={styles.wrapper + " mt-4 mx-5 "}>
            <h1
                className={
                    styles.baseFont + ' ' + styles.toLower +
                    ' display-4 py-4 text-center animate__animated animate__slideInUp'
                }
            >
                {title}
            </h1>
            <div>
                <Image
                    src={thumbnailUrl}
                    priority={true}
                    className={styles.fullBleed + " img-fluid mt-1 rounded animate__animated animate__slideInUp full-bleed"}
                    alt="thumbnail"
                    width={1000}
                    height={360}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        objectFit: "cover"
                    }} />
                <div className={styles.dateText + ' animate__animated animate__slideInUp'}>{date}</div>
                <br />
                <div className={styles.baseFont + ' ' + styles.baseText + ' animate__animated animate__slideInUp'}>
                    <MDXRemote

                        {...mdxSource}
                        components={{ Button, SyntaxHighlighter }}
                    />
                </div>
                <div className ={styles.sideWrap + " col-2 d-flex flex-wrap"}>
                {sidePics ?     sidePics.map((url, index) => {
                    return (
                        <Image
                            src={url}
                            key={index}
                            width="0"
                            height="0"
                            className={styles.smallImage + " col-12 my-5 img-fluid mt-1 rounded animate__animated animate__slideInUp full-bleed"}
                            alt="thumbnail"
                            />
                    );
                }): null}
                </div>
            </div>
        </div>
    );
};
export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'));
    const paths = files.map((filename) => ({
        params: {
            // slug: filename.replace('.mdx', ''),
            slug: filename,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug),
        // path.join('posts', slug + '.mdx'),
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
