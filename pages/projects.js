import styles from '../styles/projects.module.scss';
import 'animate.css';
import { faTwitter, faInstagram, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlogCard from "../components/BlogCard";
const Projects = () => {
    return (
        <div>
            <h1
                className={
                    styles.baseFont +
                    ' display-4 py-4 text-center animate__animated animate__fadeInRightBig animate__slow'
                }
            >
                projects
            </h1>
            <div className={styles.container}>
                <BlogCard title="Test" subtitle="smaller test" icons={[faTwitter, faInstagram, faGithub, faLinkedin]}/>
                <BlogCard title="Second Test" subtitle="bigger test" icons={[faTwitter, faInstagram, faGithub, faLinkedin]}/>
                <div className={styles.card}>
                    <h2 className={styles.cardHeader}>Defi Fund Pool</h2>
                    <i className="fas fa-arrow-right"></i>
                    <p className={styles.subTitle}>Decentralized pool funding</p>
                    <div className={styles.pic}></div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div className={styles.social}>
                        <FontAwesomeIcon className={styles.icon} icon={faTwitter}/>
                        <FontAwesomeIcon className={styles.icon} icon={faInstagram}/>
                        <FontAwesomeIcon className={styles.icon} icon={faGithub}/>
                        <FontAwesomeIcon className={styles.icon} icon={faLinkedin}/>
                    </div>
                    <button></button>
                </div>
                <div className={styles.card + ' ' + styles.card2}>
                    <h2 className={styles.cardHeader}>Vauxhall</h2>
                    <i className="fas fa-arrow-right"></i>
                    <p className={styles.subTitle}>a lonely trip.</p>
                    <div className={styles.pic}></div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div className={styles.social}>
                    <FontAwesomeIcon className={styles.icon} icon={faTwitter}/>
                        <FontAwesomeIcon className={styles.icon} icon={faInstagram}/>
                        <FontAwesomeIcon className={styles.icon} icon={faGithub}/>
                        <FontAwesomeIcon className={styles.icon} icon={faLinkedin}/>
                    </div>
                    <button></button>
                </div>
            </div>
        </div>
    );
};

export default Projects;
