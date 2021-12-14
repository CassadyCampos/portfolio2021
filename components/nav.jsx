import Link from 'next/link';

const Nav = () => {
    return (
        <div className="position-fixed">
            <nav className="nav flex-column p-3 border-bottom">
                <Link href="#home" passHref>
                    <div className="pointer lead my-auto">Home</div>
                </Link>
                <Link href="#articles" passHref>
                    <div className="pointer lead my-auto">Articles</div>
                </Link>
                <Link href="#projects" passHref>
                    <div className="pointer lead my-auto">Projects</div>
                </Link>
                <Link href="#contact" passHref>
                    <div className="pointer lead my-auto">Contact</div>
                </Link>
            </nav>
        </div>
    );
};

export default Nav;
