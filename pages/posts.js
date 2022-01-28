import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Posts = ({ posts }) => {
    return (
        <div>
            <h1 className={styles.baseFont + " display-4 py-5 text-center"}>posts</h1>
            <div>
                {posts.map((post, index) => (
                    <Link href={'/blog/' + post.slug} passHref key={index}
                    className="m-5"
                    >
                        <div className="m-5"> 
                            <div className={styles.baseText}>
                                {post.frontMatter.title}
                            </div>
                            <div classNamenpm={styles.subText}>
                                {post.frontMatter.date}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

        // <div>
        //     <h1 className="display-4 py-5 text-center">Posts</h1>
        //     <div className="">
        //         <div className="">
        //             {posts.map((post, index) => (
        //                 <Link href={'/blog/' + post.slug} passHref key={index}>
        //                     <div
        //                         className="card mb-3 pointer"
        //                         style={{ maxWidth: '540px' }}
        //                     >
        //                         <div className="row g-0">
        //                             <div className="col-8">
        //                                 <div className="card-body">
        //                                     <h5 className="card-title">
        //                                         {post.frontMatter.title}
        //                                     </h5>
        //                                     <p className="card-text">
        //                                         {post.frontMatter.description}
        //                                     </p>
        //                                     <p className="card-text">
        //                                         <small className="text-muted">
        //                                             {post.frontMatter.date}
        //                                         </small>
        //                                     </p>
        //                                 </div>
        //                             </div>
        //                             <div className="col-4 m-auto">
        //                                 <Image
        //                                     src={post.frontMatter.thumbnailUrl}
        //                                     className="img-fluid mt-1 rounded-start"
        //                                     alt="thumbnail"
        //                                     width={500}
        //                                     height={400}
        //                                     objectFit="cover"
        //                                 />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </Link>
        //             ))}
        //         </div>
        //     </div>
        // </div>
    );
};

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('posts'));
    const posts = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        );
        const { data: frontMatter } = matter(markdownWithMeta);
        return {
            frontMatter,
            slug: filename.split('.')[0],
        };
    });

    return {
        props: {
            posts,
        },
    };
};

export default Posts;
