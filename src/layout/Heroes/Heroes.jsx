import Head from 'next/head'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Datasheet from '../../components/Datasheet/Datasheet'

export default function Heroes() {
    return (
        <>
            <Head>
                <title>Heroes</title>
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" />
            </Head>
            <Header />
            <Footer />
        </>
    )
}
