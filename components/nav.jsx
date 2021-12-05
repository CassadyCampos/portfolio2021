import Link from "next/link"

const Nav = () => {
    return (
        <nav className="nav p-3 border-bottom">
            <Link href="/" passHref>
                <h2 className="pointer">Cassady Campos</h2>
            </Link>

            <Link href="/bio" passHref>
                <p className="ms-5 pointer lead my-auto">Articles</p>
            </Link>
            <Link href="/projects" passHref>
                <p className="ms-5 pointer lead my-auto">Projects</p>
            </Link>
            <Link href="/contact" passHref>
                <p className="ms-5 pointer lead my-auto">Contact</p>
            </Link>
        </nav>
    )
}

export default Nav