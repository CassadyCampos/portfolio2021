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
            <Navbar sticky="top" bg="" variant="light" expand="sm">
                <Container fluid className="px-5 py-3">
                    <Navbar.Brand href="/" className={styles.largeFont}>
                        Cassady Campos
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto mx-2">
                            <Nav.Link href="/now" className={styles.navLink}>Now</Nav.Link>
                            <Nav.Link href="/posts" className={styles.navLink}>Posts</Nav.Link>
                            <Nav.Link href="/projects" className={styles.navLink}>Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default CustomNav;
