import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Button from '../../components/Button.jsx'
import styles from '../../styles/Home.module.css'

const PostPage = ({ frontMatter: { title }, mdxSource }) => {
    return (
        <div className="mt-4 d-flex flex-wrap justify-content-center">
            <h1 className={styles.baseFont + ' col-10 py-5 display-4 text-center'}>{ title }</h1>
            <div className={'col-10'}>
            <MDXRemote className={styles.baseFont}{...mdxSource} components={{ Button, SyntaxHighlighter }} />

            </div>

        </div>
    )
}
export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx','')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts',
    slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)
    return {
        props: {
            frontMatter,
            slug,
            mdxSource
        }
    }
}

export default PostPage