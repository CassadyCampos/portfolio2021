import Head from 'next/head';
import Image from "next/image";
import styles from '../styles/Home.module.css';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import 'animate.css';
import github from '../public/githubgif.gif';
import linkedIn from '../public/linkedIn2.gif';
import pokemon from '../public/pokemon.gif';
import textStyles from "../styles/TextStyles.module.css";

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

            <main className={
                 " d-flex  mx-5"}>
                <div
                    id="home"
                    className="d-flex  flex-column text-left justify-content-center"
                    // style={{ height: 'calc(85vh - 150px)' }}
                >
                    <h1
                        className={
                            styles.mainTitle + 
                            ' text-center animate__animated animate__fadeInRightBig animate__slow'
                        }
                    >
                        Software Developer
                    </h1>
                    <div
                        className={
                            styles.subTitle +
                            ' text-center animate__animated animate__fadeInRight animate__slower'
                        }
                    >
                        Calgary, AB, Canada
                    </div>
                    <div
                        className={
                            styles.subTitle +
                            ' text-center animate__animated animate__fadeInRight animate__slower'
                        }
                    >
                        Hi Aveva, hosted on Amplify
                    </div>
                    <div className="d-flex flex-wrap justify-content-center mt-4 animate__animated animate__fadeInRightBig animate__slower">
                        <div className="mx-2">
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
                                    // objectFit="cover"
                                    height={64}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
                            </a>
                        </div>

                        <div className="mx-2">
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
                                    // objectFit="cover"
                                    height={64}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
                            </a>
                        </div>
                        {/* <div className="col-12 col-sm-2">
                            <a
                                href={'/pokemonBattle'}
                            >
                                <Image
                                    className=""
                                    src={pokemon}
                                    alt="thumbnail"
                                    width={120}
                                    height={78}
                                />
                            </a>
                        </div> */}
                    </div>

                    {/* <div
                        className={
                            styles.baseText + 
                            ' animate__animated animate__fadeInRightBig animate__slower text mt-3'
                       }
                    >
                        !
                    </div> */}
                    <div>
                                <div className={textStyles.wrapper + ' mx-5 animate__animated animate__slideInUp'}>
            
            <div className={styles.baseText + ' my-3 ' + styles.baseFont}>
                {"In 2021 I graduated studying Computer Science in Alberta, Canada. In my senior year, I was also working to build a CRM web app for prominent figures in the Oil and Energy sector that monitors the logistics of fuel deliveries, products, and the statuses of 10,000 retail gas locations across the United States and Canada."}
            </div>
            <br/>
            <br/>

            <div className={styles.baseText + ' my-3 ' + styles.baseFont}>
                {"In 2022, I was apart of a team building a Flutter mobile application that connected 250+ School Districts in the United States. The app improved communication with parents, enabling group messaging, calling, and direct updates from teachers about personalized student progress."}
            </div>
            <br/>

            <div className={styles.baseText + ' my-3 ' + styles.baseFont}>
                {"In 2023 I leveled up my Cloud Engineering skills. I migrated a on-premises PHP application to AWS and containerized it with Docker. I levereged services such as ECS, ECR, Elasticache, CloudWatch, Lambda and much more. At the same time, I shipped multiple features for another Oil "
                + " & Gas firm in Alberta for business-critical procedures and reporting. I also grabbed an AWS solutions architect certificate. I wanted to learn more about how to build large-scale distrubted system in the cloud."}
            </div>
            <br/>

            <div className={styles.baseText + ' my-3 ' + styles.baseFont}>
                {"Currently I'm learning how to leverage ChatGPT and automation to simplify simple tasks."}
            </div>
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
