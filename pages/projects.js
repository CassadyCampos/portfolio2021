import styles from '../styles/projects.module.scss';
import 'animate.css';

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
                <div className={styles.card}>
                    <h2>North</h2>
                    <i className="fas fa-arrow-right"></i>
                    <p>a lonely trip.</p>
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
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-github"></i>
                    </div>
                    <button></button>
                </div>
                <div className={styles.card + ' ' + styles.card2}>
                    <h2>Vauxhall</h2>
                    <i className="fas fa-arrow-right"></i>
                    <p>a lonely trip.</p>
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
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-github"></i>
                    </div>
                    <button></button>
                </div>
            </div>
        </div>
    );
};

export default Projects;
