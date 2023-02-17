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
                {"In the first half of 2022, I completed a mobile application that connects School Districts across the Eastern United States with parents. Allowing them to perform group messaging, facilitate calling, and know how their child is doing in school directly from the teacher within the app."}
            </div>
            <br/>

            <div className={styles.baseText + ' my-3 ' + styles.baseFont}>
                {"Lately, I’m back within the Oil and Energy space in Western Canada. I’m reviving a legacy app with new functionalities that drive the quality testing of products pipelined throughout Canada and the US."}
            </div>

            <div className={styles.baseText + ' my-3 ' + styles.baseFont}>
                {"For the near future I’m currently interested in reading, financial literacy, software development, and training my two dogs."}
            </div>

            <div className={styles.baseText + ' mt-3 ' + styles.baseFont}>{"Thanks to Ryan Kulp for the inspiration!"}</div>
            <div className={styles.baseText + ' ' + styles.baseFont}>Like the idea of a 
            <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">{" 'Now' "}</a>
             {"page? Thank David!"}</div>
        </div>
    )
}

export default Now