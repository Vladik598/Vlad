import React, { Component } from 'react';
import {Navbar, Nav, Container, Button, Dropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './icons8192.png';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';
import Reg from '../Pages/Reg'

export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container> 
                    <Navbar.Brand href="/">
                        <img 
                            src={logo}
                            height='30'
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        /> Main blog
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/"> Main </Nav.Link>
                            {/* <Nav.Link href="/about"> About us </Nav.Link> */}
                            {/* <Nav.Link href="/blog"> Blog </Nav.Link> */}
                        </Nav>

                        <Dropdown className="mr-right ml-4" >
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ width: "100px"}}>
                            User
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/contacts">Autorization</Dropdown.Item>
                            <Dropdown.Item href="/reg">Registration</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar> 

            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/reg" component={Reg}/>
                </Switch>
            </Router>

            </>
        );
    }
}
