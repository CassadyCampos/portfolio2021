import Head from "next/head"
import Nav from "../components/nav"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next and MDX Blog</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>

      </Head>

      <div className="container">
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )

}

export default MyApp
