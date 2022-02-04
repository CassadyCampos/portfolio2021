import styles from '../styles/projects.module.scss';
import { faTwitter, faInstagram, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlogCard = ({ title, subtitle }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.cardHeader}>{title}</h2>
            <i className="fas fa-arrow-right"></i>
            <p>{subtitle}</p>
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
                <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
                <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
                <FontAwesomeIcon className={styles.icon} icon={faGithub} />
                <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
            </div>
            <button></button>
        </div>
    );
};

export default BlogCard;
