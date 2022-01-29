import styles from '../styles/Home.module.css';

const Footer = () => {
    return (
        <footer 
        className={styles.footer + " col-12 bg-light text-center text-lg-start footer"}
        >
        {/* <!-- Copyright --> */}
        <div
            className={
                styles.baseFont + ' text-center p-3'
            }
        >
            © 2020 Copyright:
            <a className="text-dark" href="h#">
                Cassady
            </a>
        </div>
        {/* <!-- Copyright --> */}
        </footer>  
    );
};

export default Footer;