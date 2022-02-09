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
                <div className="">
                <BlogCard cardImage={"/alberta.jpeg"} title="Portfolio" subtitle="my latest personal website" icons={[faTwitter, faInstagram, faGithub, faLinkedin]}/>
                </div>
                <div className="">
                <BlogCard cardImage={"/blockchain.jpeg"} title="Defi Pool Fund" subtitle="pool funding with smart contracts" icons={[faTwitter, faInstagram, faGithub, faLinkedin]}/>
                </div>
                <div className="">
                <BlogCard cardImage={"/deskSetup.jpeg"} title="Portfolio" subtitle="my latest personal website" icons={[faTwitter, faInstagram, faGithub, faLinkedin]}/>
                </div>
                {/* <BlogCard title="IoT Temp. Network" subtitle="IOT temperature monitoring" icons={[faTwitter, faInstagram, faGithub, faLinkedin]}/> */}

            </div>
        </div>
    );
};

export default Projects;
