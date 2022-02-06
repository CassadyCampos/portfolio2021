import styles from '../styles/projects.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";

const BlogCard = ({ title, subtitle, icons }) => {
    return (
        <div className={styles.card + ' col-7'}>
            <h2 className={styles.cardHeader}>{title}</h2>
            <i className="fas fa-arrow-right"></i>
            <p className={styles.subTitle}>{subtitle}</p>
            <div className={styles.pic}></div>
            <Image
            style={{
                zIndex: 100,
            }}
            
            />
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
                    <FontAwesomeIcon key={icons.indexOf(icon)} className={styles.icon} icon={icon}  />
                ))}
            </div>
            <button></button>
        </div>
    );
};

export default BlogCard;
