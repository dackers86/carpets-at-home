import React, { Component } from 'react'
import { Button, Form, Input, Icon, TextArea } from 'semantic-ui-react'
import AddressDetails from './AddressDetails'

class MeasureForm extends Component {

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Field control={Input} label='Name' placeholder='First name' required />
          <Form.Field control={Input} label='Surnames' placeholder='Surname' required />
          <Form.Field control={Input} label='Contact Number' placeholder='Contact Number' />
        </Form.Group>

        <AddressDetails />

        <Form.Field control={TextArea} label='What are you looking for?' placeholder='What are you looking for?' />
        <Form.Field control={Button} primary>Talk to Ash</Form.Field>
        <Form.Field control={Button} secondary>Take a tour</Form.Field>
        <Form.Field control={Button} tertiary>View Portfolio</Form.Field> </Form>
    )
  }
}
export default MeasureForm; 
