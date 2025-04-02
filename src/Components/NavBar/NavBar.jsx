import React,{useEffect} from 'react'
import { Navbar, Container, Nav, Button, Collapse } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { TbAlarmAverage } from "react-icons/tb";
import { signOut } from "firebase/auth"
import { Authentication } from '../FireBase/FireBase';


const NavBar_1 = ({ userLoggedIn, setUserLoggedIn }) => {

  const Navigate = useNavigate()

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn") === "true"
    setUserLoggedIn(loggedIn)
  }, [])

  const SignOut = () => {
    signOut(Authentication)
    localStorage.removeItem("loggedIn")
    setUserLoggedIn(false)
    Navigate("/")
  }



  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" expand="sm">
        <Container>
          <Navbar.Brand href="./NavBar.jsx"><TbAlarmAverage size={40} />Time-Scheduler</Navbar.Brand>
          <Navbar.Toggle></Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            {userLoggedIn ? <Button onClick={SignOut}>Sign Out</Button>
              : <div style={{ display: "flex", gap: "10px" }}>
                <Button className="mr-2" onClick={() => Navigate("/signup")}>SignUp</Button>
                <Button className="mr-2" onClick={() => Navigate("/login")}>Login</Button>
              </div>}
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default NavBar_1