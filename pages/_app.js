import Head from 'next/head';
import Nav from '../components/nav';
import Footer from '../components/Footer';
import styles from '../styles/global.css';
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Next and MDX Blog</title>
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
                <link
                    href="https://fonts.googleapis.com/css2?family=Arbutus+Slab&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="">
                <Nav />
                <main>
                    <div className={'d-flex flex-wrap justify-content-center'}>
                        <div className={'col-8'}>
                            <Component {...pageProps} />
                        </div>

                        <Footer />
                    </div>
                </main>
            </div>
        </>
    );
}

export default MyApp;
