import Head from 'next/head';
import CustomNav from '../components/CustomNav';
import Footer from '../components/Footer';
import styles from '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Cassady Campos Portfolio</title>
            </Head>

            <div className="">
                <CustomNav />
                <main className="min-vh-100">
                    {/* <div className={'d-flex flex-wrap justify-content-center'}> */}
                        <div className={'py-4  col-12 d-flex justify-content-center align-items-center'}>
                            <Component {...pageProps} />
                        </div>
                    {/* </div> */}
                </main>
                <Footer />
            </div>
        </>
    );
}

export default MyApp;
