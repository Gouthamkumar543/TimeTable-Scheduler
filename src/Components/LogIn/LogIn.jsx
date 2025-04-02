import React, { useState } from 'react'
import { Modal, Form, Button, Alert } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth"
import { Authentication,DataBase } from '../FireBase/FireBase'
import { get, ref } from 'firebase/database'


const LogIn = ({userLoggedIn, setUserLoggedIn}) => {

    const [loginShow, setLoginShow] = useState(true)
    const [loginUser, setLoginUser] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState("")

    const Navigate = useNavigate()

    const LogIn_Modal_Close = () => {
        setLoginShow(false)
        Navigate("/")
    }

    const Handle_Login_Users = (x) => {
        setLoginUser({ ...loginUser, [x.target.name]: x.target.value })
    }

    const { email, password } = loginUser

    const Handle_Submit = async (event) => {
        event.preventDefault()
        setError('')
        try {
            const UserCred = await signInWithEmailAndPassword(Authentication, email, password)
            const LogInUser = UserCred.user.displayName
            const User = ref(DataBase, `Data/Users/${LogInUser}`)
            const UserData = await get(User)
            localStorage.setItem("loggedIn","true")
            setUserLoggedIn(true)

            if (UserData.exists()) {
                Navigate("/dashboard", { state: { PersonData: UserData.val()} })
            } else {
                alert("No Data Found")
            }
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div>
            <Modal show={loginShow} onHide={LogIn_Modal_Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={Handle_Submit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name='email' onChange={Handle_Login_Users} required autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' onChange={Handle_Login_Users} required autoFocus />
                        </Form.Group>
                        <Button variant="danger" style={{ margin: "0px 10px" }} onClick={LogIn_Modal_Close}>Close</Button>
                        <Button variant="primary" type="submit">LogIn</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default LogIn