import Head from 'next/head'
import { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import * as S from './Styled'


export default function Home() {

    return (
        <S.Page>
            <Head>
                <title>Marvel</title>
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" />
            </Head>
            <div>
                <Header />
            </div>

            <S.Background >
                <Search />
                <S.Space></S.Space>
            </S.Background>
            <Footer />
        </S.Page>
    )
}