import React from 'react'
import Head from 'next/head'
import MainMenu from '~/menu'
import Hero from '~/hero'
import { Container } from 'semantic-ui-react'

export default () => (
    <div>
        <Head>
            <title>Carpets At Home</title>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"></link>
        </Head>
        <MainMenu />
        <Hero />
    </div>
)