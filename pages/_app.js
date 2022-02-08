import Head from 'next/head';
import Nav from '../components/nav';
import Footer from '../components/Footer';
import styles from '../styles/global.css';
// config.autoAddCss = false

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Cassady Campos Portfolio</title>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous"
                ></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="">
                <Nav />
                <main className="min-vh-100">
                    <div className={'d-flex flex-wrap justify-content-center'}>
                        <div className={'py-4'}>
                            <Component {...pageProps} />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default MyApp;
