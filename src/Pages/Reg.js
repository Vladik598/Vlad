import React, { Component } from 'react'
import {Form, Button, Container} from "react-bootstrap"

export default class Reg extends Component {
    render() {
        return (
            <Container style={{ width: "500px"}}>
                <h1 className="text-center mt-3" >Registration</h1>
                <Form>
                    <Form.Group controlId="formBasic">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="text" placeholder="Enter user name"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text>
                            We`ll never share your e-mail with anyone else
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="mt-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"/>
                        <Form.Text>
                            We`ll never share your password with anyone else
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="Submit" className="d-block mx-auto">Enter</Button>

                </Form>
            </Container>
        )
    }
}
