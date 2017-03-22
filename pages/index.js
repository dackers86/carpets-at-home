import React from 'react'
import Head from 'next/head'
import MainMenu from '~/menu'
import Hero from '~/hero'
import MeasureForm from '~/measureForm'
import HeaderMessage from '~/headerMessage'
import { Container } from 'semantic-ui-react'

export default class extends React.Component {
    
    renderHomePage() {
        return (
            <div>
                <HeaderMessage />
                <MainMenu />
                <Hero />

                <Container>
                    <MeasureForm />
                </Container>
            </div>
        )
    }

    renderPortfolio(){
        return(
            <div></div>
        )
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Carpets At Home</title>
                    <link rel="stylesheet"
                          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"></link>
                </Head>

                {this.renderHomePage()}
            </div>
        )
    }
}