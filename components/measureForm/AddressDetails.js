import React from 'react';
import axios from 'axios';

import { Form, Input, Dropdown } from 'semantic-ui-react'

class Component extends React.Component {

  constructor() {
    super();
    this.timeout = null;
    this.state = {
      fullAddress: null,
      addressOptions: [],
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleChange = (e, { value }) => {
    this.setState({
      currentValue: value
    });
  }

  handleSearchChange = (e, value) => {
    let addressOptions = [];

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=AIzaSyAi97WFtKsE2b2dnsjrWSnW5mRjAzOKNBU`)
        .then((response) => {
          response.data.results.map((address, i) => {
            console.log('key', i)
            addressOptions.push({
              key: i,
              text: address.formatted_address,
              value: i });
          });

          this.setState({
            addressOptions,
          });
        });
    }, 300)



  }

  renderPartialAddress() {

    console.log('Rendering with', this.state.addressOptions);

    const { currentValue } = this.state;

    return (
      <Dropdown
        allowAdditions
        options={this.state.addressOptions}
        placeholder='Please enter your address'
        search
        selection
        fluid
        onSearchChange={this.handleSearchChange.bind(this)}
      />
    )
  }

  renderFullAddress() {
    return (<Form.Group widths='equal'>
        <Form.Field control={Input} label='Flat / House Number' laceholder='Flat / House number' required />
        <Form.Field control={Input} label='Street' placeholder='Street' value={this.state.street} />
        <Form.Field control={Input} label='Area' placeholder='Area' value={this.state.area} />
        <Form.Field control={Input} label='Region' placeholder='Region' value={this.state.region} /> </Form.Group>
    )
  }

  render() {
    return (
      <div>

        {!this.state.fullAddress &&
        this.renderPartialAddress()
        }

        {this.state.fullAddress &&
        this.renderFullAddress()
        }

      </div>
    );
  }

}

export default Component;
