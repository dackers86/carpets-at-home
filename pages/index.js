import React from 'react'
import Head from 'next/head'
import MainMenu from '~/menu'
import Hero from '~/hero'
import MeasureForm from '~/measureForm'
import { Container, Message } from 'semantic-ui-react'

export default class extends React.Component {

    deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

    calculateDistance(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    getLocation = () => {
        const geolocation = navigator.geolocation;

        new Promise((resolve, reject) => {
            if (!geolocation) {
                reject(new Error('Not Supported'));
            }

            geolocation.getCurrentPosition((position) => {
                console.log(position);
                const distance = this.calculateDistance(53.441364, -2.714846, position.coords.latitude, position.coords.longitude);

                this.setState({
                    distance: distance,
                });
                resolve(position);
            }, () => {
                reject(new Error('Permission denied'));
            });
        });
    }

    componentDidMount() {
        this.getLocation();
    }

    renderMessage() {
        if (this.state && this.state.distance && this.state.distance < 12) {

            const message  = `You are ${this.state.distance} miles away`;

            return <Message
                success
                header="Wehey!"
                content={message}
            />
        }

        return <div></div>
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Carpets At Home</title>
                    <link rel="stylesheet"
                          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"></link>
                </Head>
                {this.renderMessage()}
                <MainMenu />
                <Hero />

                <Container>
                    <MeasureForm />
                </Container>

            </div>
        )
    }
}