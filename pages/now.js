import styles from "../styles/Home.module.css";
import textStyles from "../styles/TextStyles.module.css";
import 'animate.css'

const Now = () => {
    return (
        <div className={textStyles.wrapper + ' mx-5 animate__animated animate__slideInUp'}>
            <h1 className={styles.baseFont + " display-4 py-4 text-center"}>now</h1>
            
            <div className={styles.baseText + ' my-3 ' + styles.baseFont}>
                {"In 2021 I graduated studying Computer Science in Alberta, Canada."}
            </div>
        <br/>

            <div className={styles.baseText + ' my-3 ' + styles.baseFont}>
                {"I built a CRM web app for prominent figures in the Oil and Energy sector that monitors the logistics of fuel deliveries, products, and the statuses of retail gas locations across the United States and Canada."}
            </div>
            <br/>

            <div className={styles.baseText + ' my-3 ' + styles.baseFont}>
                {"In 2022, I was apart of a team building a mobile application that connects 200 School Districts in the United States. The app improved coommunication with parents, enabling group messaging, calling, and direct updates from teachers about personalized sutdents' progress."}
            </div>
            <br/>

            <div className={styles.baseText + ' my-3 ' + styles.baseFont}>
                {"In 2023 I leveled up my Cloud Engineering skills. I migrated a on-premises PHP application to AWS containerized it with Docker. I Levereged services such as ECS, ECR, Elasticache, CloudWatch, Lambda and much more. At the same time, I helped shipped multiple production deployments of an business-critical Oil "
                + " & Gas firm here in Alberta using technologies such as .NET, JQuery and Azure."}
            </div>
            <br/>

            <div className={styles.baseText + ' my-3 ' + styles.baseFont}>
                {"Lately, I’m back in the Oil and Energy space. I’m reviving a legacy app with new functionalities that drive the quality testing of products pipelined throughout Canada and the US."}
            </div>

            <div className={styles.baseText + ' my-3 ' + styles.baseFont}>
                {"For the near future I’m currently interested in reading, financial literacy, software development, and training my two dogs."}
            </div>

            {/* <div className={styles.baseText + ' mt-3 ' + styles.baseFont}>{"Thanks to Ryan Kulp for the inspiration!"}</div> */}
            <div className={styles.baseText + ' ' + styles.baseFont}>Like the idea of a 
            <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">{" 'Now' "}</a>
             {"page? Kudos to David!"}</div>
        </div>
    )
}

export default Now