import styles from '../styles/projects.module.scss';
import 'animate.css';
import { faTwitter, faInstagram, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlogCard from "../components/BlogCard";
// import deskSetup from "/deskSetup.jpeg";
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
                <div className="d-flex col-12 justify-content-center">
                <BlogCard cardImage={"/alberta.jpeg"} title="Portfolio" subtitle="my latest personal website" icons={[faTwitter, faInstagram, faGithub, faLinkedin]}/>
                </div>
                <div className="d-flex col-12 justify-content-center">
                <BlogCard cardImage={"/blockchain.jpeg"} title="Defi Pool Fund" subtitle="pool funding with smart contracts" icons={[faTwitter, faInstagram, faGithub, faLinkedin]}/>
                </div>
                <div className="d-flex col-12 justify-content-center">
                <BlogCard cardImage={"/ardunio.jpeg"} title="IoT Temp. Network" subtitle="Home Temperature Network" icons={[faTwitter, faInstagram, faGithub, faLinkedin]}/>
                </div>

            </div>
        </div>
    );
};

export default Projects;
