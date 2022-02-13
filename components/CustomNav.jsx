import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import styles from '../styles/Home.module.css';
// import './navbar.css';
class CustomNav extends Component {
  render() {
    return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/" className={styles.baseFont}>Cassady Campos</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/now">Now</Nav.Link>
        <Nav.Link href="/posts">Posts</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="/now">Now</NavDropdown.Item>
          <NavDropdown.Item href="/posts">Posts</NavDropdown.Item>
          <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
  }
}

export default CustomNav;
