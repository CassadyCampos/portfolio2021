import Head from 'next/head';
import Nav from '../components/nav';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Next and MDX Blog</title>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossorigin="anonymous"
                ></link>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
                ></link>
            </Head>

            <div className="container-fluid">
                <div className="row">
                  <div className="col-3 d-flex justify-content-center"
                  style={{marginTop: "15rem"}}>
                  <Nav />

                  </div>
                    <main className="col-8">
                        <Component {...pageProps} />
                    </main>
                </div>
            </div>
        </>
    );
}

export default MyApp;
