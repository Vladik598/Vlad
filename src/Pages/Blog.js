import React, { Component } from 'react'
import { Container, Row, Col, Media, Card, ListGroup } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={9}>
                        <Media className="m-5">
                            <img 
                                width={150}
                                height={150}
                                className='mr-3'
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                alt="js"
                            />
                             <Media.Body>
                                 <h5>Blog post</h5>
                                 <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                             </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img 
                                width={150}
                                height={150}
                                className='mr-3'
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                alt="js"
                            />
                             <Media.Body>
                                 <h5>Blog post</h5>
                                 <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                             </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img 
                                width={150}
                                height={150}
                                className='mr-3'
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                alt="js"
                            />
                             <Media.Body>
                                 <h5>Blog post</h5>
                                 <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                             </Media.Body>
                        </Media>
                    </Col>
                    {/* <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>js</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Side Widget</Card.Title>
                                <Card.Text>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col> */}
                </Row>
            </Container>
        );
    }
}
