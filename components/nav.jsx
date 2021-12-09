import Link from "next/link"

const Nav = () => {
    return (
        <div className="col-3 position-fixed">
                    <nav className=" col-3 nav flex-column p-3 border-bottom">
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
        </div>
        // <nav className=" col-3 nav flex-column p-3 border-bottom">
        //     <Link href="/bio" passHref>
        //         <p className="ms-5 pointer lead my-auto">Articles</p>
        //     </Link>
        //     <Link href="/projects" passHref>
        //         <p className="ms-5 pointer lead my-auto">Projects</p>
        //     </Link>
        //     <Link href="/contact" passHref>
        //         <p className="ms-5 pointer lead my-auto">Contact</p>
        //     </Link>
        // </nav>
    )
}

export default Nav