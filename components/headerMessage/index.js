import React from 'react';
import { Message, Icon } from 'semantic-ui-react'

class HeaderMessage extends React.Component {

  componentDidMount() {
    this.getLocation();
  }

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


    if (!geolocation) {
      // reject(new Error('Not Supported'));
    }

    geolocation.getCurrentPosition((position) => {
      console.log(position);
      const distance = this.calculateDistance(53.441364, -2.714846, position.coords.latitude, position.coords.longitude);

      this.setState({
        distance: distance,
      });
      // resolve(position);
    }, () => {
      // reject(new Error('Permission denied'));
    });
  }

  renderMessage() {

    if (!this.state || !this.state.distance) {
      return <Message icon>
        <Icon name='circle notched' loading />
        <Message.Content>
          <Message.Header>Just one second</Message.Header>
          We are checking your location...
        </Message.Content>
      </Message>
    }


    let message = {};

    if (this.state && this.state.distance && this.state.distance < 12) {

      message = `You are ${this.state.distance.toFixed(1)} miles away`;

      return <Message
        success
        content={message}
      />
    }

    message = `You are only ${this.state.distance.toFixed(1)} miles away`;

    return <Message
      failure
      header="Uh Oh!"
      content={message}
    />
  }

  render() {
    return (
      <div>{this.renderMessage()}</div>
    );
  }

}

export default HeaderMessage;
