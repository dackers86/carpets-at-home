import React, { Component } from 'react'
import { Button, Form, Input, Select, TextArea } from 'semantic-ui-react'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

class MeasureForm extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <Form>
                <Form.Group>
                    <Form.Field control={Input} label='Name' placeholder='First name' />
                    <Form.Field control={Input} label='Surnames' placeholder='Surname' />
                    <Form.Field control={Input} label='Contact Number' placeholder='Contact Number' />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field control={Input} label='Name' placeholder='Name' />
                    <Form.Field control={Input} label='Street' placeholder='Street' />
                    <Form.Field control={Input} label='Area' placeholder='Area' />
                    <Form.Field control={Input} label='Postcode' placeholder='Postcode' />
                </Form.Group>
                <Form.Field control={TextArea} label='What are you looking for?' placeholder='What are you looking for?' />
                <Form.Field control={Button} primary>Book a measure</Form.Field>
                <Form.Field control={Button} secondary>Take a tour</Form.Field>
                <Form.Field control={Button} tertiary>View Portfolio</Form.Field>
            </Form>
        )
    }
}

export default MeasureForm;