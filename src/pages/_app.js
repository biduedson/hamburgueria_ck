import Head from "next/head"
import '../styles/global.scss'
import '../styles/navbar.scss'
import '../styles/index.scss'
import '../styles/menu.scss'
import '../styles/footer.scss'
import '../styles/contact.scss'
import '../styles/animations.scss'

import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer"

function Myapp({ Component, pageProps }) {
    return (
        <>
            <NavBar />
            <Head>
                <title>Hamburgueria CK</title>
                <meta name="description" content="CK Hamburgueria" />
            </Head>
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default Myapp;