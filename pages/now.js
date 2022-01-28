import styles from "../styles/Home.module.css";

const NowPage = () => {
    return (
        <div className="">
            <h1 className={styles.baseFont + " py-5 display-4 text-center"}>now</h1>
            
            <div className={styles.baseText}>
                {"In 2021 I graduated studying Computer Science from the Univerisity of Lethbridge, AB, Canada."}
            </div>
            <br/>

            <div className={styles.baseText}>
                {"Since then, I have been working at Arcurve as a Full-Stack Software Engineer. Here I was building a CRM web app for prominent figures in the Oil and Energy sector. Monitoring the logistics of fuel deliveries, products, and retail gas locations across the United States and Canada."}
            </div>
            <br/>

            <div className={styles.baseText}>
                {"Personally, at the moment I'm really into Web3 and decentralized web apps (DAPPS). I'm also looking to get into open source projects, however I'm still looking to find the right project."}
            </div>
            <br/>

            <div className={styles.baseText}>{"Thanks to Ryan Kulp for the inspiration!"}</div>
            <div className={styles.baseText}>Like the idea of a 
            <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">{"'Now'"}</a>
             {"page? Thank David!"}</div>
        </div>
    )
}

export default NowPage