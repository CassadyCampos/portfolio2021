import styles from '../styles/projects.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";

const BlogCard = ({ title, subtitle, icons, cardImage, icon }) => {
    return (
        <div className={"d-flex col-12 justify-content-center"}>

        <div className={styles.card }>
            <h2 className={styles.cardHeader}>{title}</h2>
            <i className="fas fa-arrow-right"></i>
            <p className={styles.subTitle}>{subtitle}</p>
            <div style={{backgroundImage: `url(${cardImage})`}} className={styles.pic}></div>
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
                {icons.map((icon) => (
                    <img className={ styles.icon} src="/icons/svg/nextjs.svg"  />
                    // <FontAwesomeIcon key={icons.indexOf(icon)} className={styles.icon} icon={icon}  />
                ))}
            </div>
            <button
            style={{backgroundColor: "#DA4D1D"}}
            ></button>
        </div>
        </div>

    );
};

export default BlogCard;
