import React, { Fragment } from "react";
import { Grid, Image, Container } from 'semantic-ui-react'
import './style.css'


function AboutUser() {
    return (
        <Fragment>
            <Container className="grid">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Image src='https://i.ibb.co/tKfrVv0/background.jpg' />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <p> I am a former environmental engineer who has re-trained to become a web developer.  The experience in permitting, design, construction and interaction with public regulators and private clients relates directly to web design, in that careful project planning and management are required to complete a successful project.  Having worked for firms with 2 to 80,000 employees, I am used to working both with large, multidisciplinary teams, and on my own, where self-learning was key.  I used that desire for learning to earn a MERN certification, and continue to expand my knowledge in JavaScript and other web technologies.</p>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Image src='https://i.ibb.co/3Rn47ys/jtsy-home.png' />
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <p>More text.</p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Image src='https://i.ibb.co/3Rn47ys/jtsy-home.png' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            <p>*</p>
        </Fragment>
    )
}
export default AboutUser;