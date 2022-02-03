import styles from "../styles/Home.module.css";
import 'animate.css'

const Now = () => {
    return (
        <div className={' animate__animated animate__slideInUp'}>
            <h1 className={styles.baseFont + " display-4 py-4 text-center"}>now</h1>
            
            <div className={styles.baseText}>
                {"In 2021 I graduated studying Computer Science from the Univerisity of Lethbridge, AB, Canada."}
            </div>
        <br/>

            <div className={styles.baseText}>
                {"Since then, I have been working as a Full-Stack Software Engineer at Arcurve. Building a CRM web app for prominent figures in the Oil and Energy sector. Monitoring logistics of fuel deliveries, products, and retail gas locations across the United States and Canada."}
            </div>
            <br/>

            <div className={styles.baseText}>
                {"My current interests are web technologies, and blockchain. I grew to love reading books, and I enjoy learnign about random things that I can write about."}
            </div>
            <br/>

            <div className={styles.baseText}>{"Thanks to Ryan Kulp for the inspiration!"}</div>
            <div className={styles.baseText}>Like the idea of a 
            <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">{" 'Now' "}</a>
             {"page? Thank David!"}</div>
        </div>
    )
}

export default Now