import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from "next/image";
import styles from '../styles/Home.module.css';
import 'animate.css'

const Posts = ({ posts }) => {
    return (
        <div>
            <h1 className={styles.baseFont + " display-4 py-4 text-center animate__animated animate__fadeInRightBig animate__slower"}>posts</h1>
            <div>
                {posts.map((post, index) => (
                    <Link className={styles.noUnderline}href={'/blog/' + post.slug} passHref key={index}
                    >
                        <div className={styles.postLink + " m-4"}> 
                            <div className={styles.baseText + ' ' + styles.fadeIn + ' animate__animated animate__fadeInRightBig animate__slow'}>
                                {post.frontMatter.title}
                            </div>
                            <div className={styles.subText + '  animate__animated animate__fadeInRightBig animate__slower'}>
                                {post.frontMatter.date}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>  
    );
};

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('posts'));
    console.log(typeof files)
    const posts = files.map((filename) => {
        // console.log(typeof filename)
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

    posts.sort((a, b) => a.frontMatter.postId > b.frontMatter.postId ? -1 : 1 );

    return {
        props: {
            posts,
        },
    };
};

export default Posts;
