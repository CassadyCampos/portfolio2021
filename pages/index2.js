import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import 'animate.css';
import github from '../public/githubgif.gif';
import linkedIn from '../public/linkedIn2.gif';
import pokemon from '../public/pokemon.gif';
import fire from '../public/fire.gif'

import React, { useState } from 'react';

export default function Home({ posts }) {
    const [open, set] = useState(true);

    return (
        <div>
            <Head>
                <title>Cassady Campos Software</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.burntHome + " d-flex  px-5  burn"} >
                <Image
                    src={fire}
                    alt="fire consuming the page"
                    layout="fill"
                    objectFit="cover"
                >

                </Image>
                <div
                    id="home"
                    className="d-flex  flex-column text-left justify-content-center"
                    style={{ height: 'calc(85vh - 150px)' }}
                >
                    <h1
                        className={
                            styles.mainTitle +
                            ' animate__animated animate__fadeInRightBig animate__slow'
                        }
                    >
                        Software Developer
                    </h1>
                    <div
                        className={
                            styles.subTitle +
                            ' animate__animated animate__fadeInRight animate__slower'
                        }
                    >
                        Calgary, AB, Canada
                    </div>
                    <div
                        className={
                            styles.baseText + 
                            ' animate__animated animate__fadeInRightBig animate__slower text mt-3'
                        }
                    >
                        I like to build things, read things, and write things!
                    </div>
                    <div className="d-flex flex-wrap mt-4 animate__animated animate__fadeInRightBig animate__slower">
                        <div className="col-2">
                            <a
                                href={'https://github.com/CassadyCampos'}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    className=""
                                    src={github}
                                    // className="col-md-8, col-sm-12 img-fluid mt-1 rounded"
                                    alt="thumbnail"
                                    width={64}
                                    height={64}
                                    // objectFit="cover"
                                />
                            </a>
                        </div>

                        <div className="col-2">
                            <a
                                href={
                                    'https://www.linkedin.com/in/cassady-campos-2915531a9/'
                                }
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    className={styles.grayScale}
                                    src={linkedIn}
                                    // className="col-md-8, col-sm-12 img-fluid mt-1 rounded"
                                    alt="thumbnail"
                                    width={64}
                                    height={64}
                                    // objectFit="cover"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

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