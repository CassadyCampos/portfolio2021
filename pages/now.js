import styles from "../styles/Home.module.css";
import textStyles from "../styles/TextStyles.module.css";
import 'animate.css'

const Now = () => {
    return (
        <div className={textStyles.wrapper + ' mx-5 animate__animated animate__slideInUp'}>
            <h1 className={styles.baseFont + " display-4 py-4 text-center"}>now</h1>
            
            <div className={styles.baseText + ' my-3 ' + styles.baseFont}>
                {"In 2021 I graduated studying Computer Science from the Univerisity of Lethbridge, AB, Canada."}
            </div>
        <br/>

            <div className={styles.baseText + ' my-3 ' + styles.baseFont}>
                {"Since then, I have been working as a Full-Stack Software Engineer at Arcurve. Building a CRM web app for prominent figures in the Oil and Energy sector. Monitoring logistics of fuel deliveries, products, and retail gas locations across the United States and Canada."}
            </div>
            <br/>

            <div className={styles.baseText + ' my-3 ' + styles.baseFont}>
                {"My current interests are web technologies, and blockchain. I grew to love reading books, and I enjoy learning about random things that I can write about."}
            </div>
            <br/>

            <div className={styles.baseText + ' mt-3 ' + styles.baseFont}>{"Thanks to Ryan Kulp for the inspiration!"}</div>
            <div className={styles.baseText + ' ' + styles.baseFont}>Like the idea of a 
            <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">{" 'Now' "}</a>
             {"page? Thank David!"}</div>
        </div>
    )
}

export default Now