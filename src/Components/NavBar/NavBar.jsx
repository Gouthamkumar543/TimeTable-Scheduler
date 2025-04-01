import React from 'react'
import { Navbar, Container, Nav, Button, Collapse } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { TbAlarmAverage } from "react-icons/tb";

const NavBar_1 = () => {

  const Navigate = useNavigate()

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" expand="sm">
        <Container>
          <Navbar.Brand href="./NavBar.jsx"><TbAlarmAverage size={40}/>Time-Scheduler</Navbar.Brand>
          <Navbar.Toggle></Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button className="mr-2" onClick={() => Navigate("/signup")}>SignUp</Button>
              <Button className="mr-2" onClick={() => Navigate("/login")}>Login</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default NavBar_1