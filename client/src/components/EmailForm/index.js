import React from 'react'
import { Button, Form, TextArea, Grid } from 'semantic-ui-react'
// import "./emailform.css"

const EmailForm = () => (
    <Form action="mailto: jrcannon@msn.com" method="GET" target="_blank">
        <Grid columns="1">
            <Grid.Column width="6">
                <Form.Field inline className='field'>
                    <label className='label' for='subject'>Subject</label>
                    <input className="input" name='subject' id='subject' type='text' placeholder='Subject...' />
                </Form.Field>
            </Grid.Column>
            <Grid.Column width="12">
                <Form.Field as="Segment" className='field'>
                    <label className="label" for='body'>Message</label>
                    <TextArea rows={3} className='textarea' name='body' id='body' placeholder='Message...' />
                </Form.Field>
            </Grid.Column>
            <Grid.Column width="6">
                <Button secondary type='submit'>Send</Button>
            </Grid.Column>
        </Grid>
    </Form>
)

export default EmailForm