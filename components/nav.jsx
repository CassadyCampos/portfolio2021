import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Nav = () => {
    return (
        <div className="">
            <nav className="p-4 navbar navbar-expand-sm navbar-light bg-light">
                <a className={styles.baseFont + ' navbar-brand'} href={'/'}>
                    Cassady Campos
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href={'/now'}>
                                Now <span className="sr-only"></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Posts
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
