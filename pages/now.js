import styles from '../styles/Home.module.css';

const NowPage = () => {
    return (
        <div className="px-5">
            <h1 className={styles.baseFont + ' display-4 text-center'}>now</h1>
            
            <div className={styles.baseFont}>In 2021 I graduated from the Univerisity of Lethbridge, AB, Canada.</div>
            <br/>
            <div className={styles.baseFont}>Since then, I have been working at Arcurve as a Full-Stack Software Engineer. 
                Here I am building a web app for logistics tracking of fuel products across the Oil And Energy sector across
                Canada and the United States.
            </div>
            <br/>

            <div className={styles.baseFont}>Personally, at the moment I'm really into Web3 and decentralized web apps (Dapps) at the moment! Building websites
                that allow users to connect to and interact with blockchains (Ethereum mostly) through smart-contracts!
            </div>
        </div>
    )
}

export default NowPage