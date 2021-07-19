import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown, Container, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


const Styles = styled.div`
  .navbar { background-color: #222; position : fixed; top:0; right:0; left:0; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #ff9900;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #ff9900;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;


export class NavigationBar_ws extends Component {
  render() {
    return (
      <Navbar bg="primary" expand="lg" variant="dark" style={{ marginLeft: '-100px', width: '60rem', height: '4rem' }}>
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Indentform" style={{ marginRight: '60px', color: 'black', fontWeight: 'bold' }}>Indent Form</Nav.Link>
              <Nav.Link href="/Raisedindents" style={{ marginRight: '60px', color: 'black', fontWeight: 'bold' }}>Raised Indents</Nav.Link>
              <Nav.Link href="/Issuedindentws" style={{ marginRight: '100px', color: 'black', fontWeight: 'bold' }}>Issued Indents</Nav.Link>
              <NavDropdown title="MORE" id="basic-nav-dropdown" style={{ color: 'yellowgreen' }}>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/About">About the application</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavigationBar_ws