import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


export default function Header() {
  //const [isLogin  ] = useState(false)
  const isLogin = false; 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/category">categories</Nav.Link>
            <Nav.Link href="/about"> about us</Nav.Link>
            <Nav.Link href={isLogin? "/profile" : "/login"}>profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
