import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import styles from '../styles/Home.module.css';
// import './navbar.css';
class CustomNav extends Component {
    render() {
        return (
            <Navbar bg="" expand="sm">
                <Container fluid className="px-5 py-3">
                    <Navbar.Brand href="/" className={styles.baseFont}>
                        Cassady Campos
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto mx-2">
                            <Nav.Link href="/now">Now</Nav.Link>
                            <Nav.Link href="/posts">Posts</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default CustomNav;
