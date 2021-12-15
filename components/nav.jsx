import Link from 'next/link';

const Nav = () => {
    return (
        <div className="position-fixed">
            <nav className="nav flex-column p-3 ">
                <Link className="nav-item" href="#home" passHref>
                    <a className="nav-link lead my-auto">Home</a>
                </Link>
                <Link className="nav-item" href="#articles" passHref>
                    <a className="nav-link lead my-auto">Articles</a>
                </Link>
                <Link className="nav-item" href="#projects" passHref>
                    <a className="nav-link lead my-auto">Projects</a>
                </Link>
                <Link className="nav-item" href="#contact" passHref>
                    <a className="nav-link lead my-auto">Contact</a>
                </Link>

            </nav>
        </div>
    );
};

export default Nav;
