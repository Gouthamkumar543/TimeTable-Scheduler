import React, { useState } from 'react'
import { Modal, Form, Button, Alert } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { Authentication } from '../FireBase/FireBase'
import { set, ref, get } from "firebase/database"
import { DataBase } from '../FireBase/FireBase'

const SignUp = () => {
    const [signupShow, setSignupShow] = useState(true)
    const [signUpUser, setSignUpUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    const [error, setError] = useState("");


    const Navigate = useNavigate()

    const Signup_Modal_Close = () => {
        setSignupShow(false)
        Navigate("/")
    }

    const Handle_Signup_users = (x) => {
        setSignUpUser({ ...signUpUser, [x.target.name]: x.target.value })
    }

    const { name, email, password, confirmpassword } = signUpUser

    const Handle_Submit = async (event) => {
        event.preventDefault()
        setError("")
        if (password !== confirmpassword) {
            setError("Passwords did not match!");
            return
        }
        try {
            const SignUpUser = await createUserWithEmailAndPassword(Authentication, email, password)
            const User = SignUpUser.user

            await updateProfile(User, { displayName: name })
            await set(ref(DataBase, `Data/Users/${name}`), {
                name: name,
                email: email,
                id: SignUpUser.user.uid
            })

            Navigate("/login")
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div>
            <Modal show={signupShow} onHide={Signup_Modal_Close}>
                <Modal.Header closeButton>
                    <Modal.Title>SignUp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={Handle_Submit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' onChange={Handle_Signup_users} required autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name='email' onChange={Handle_Signup_users} required autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' onChange={Handle_Signup_users} required autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name='confirmpassword' onChange={Handle_Signup_users} required autoFocus />
                        </Form.Group>
                        <Button variant="danger" style={{ margin: "0px 10px" }} onClick={Signup_Modal_Close}>Close</Button>
                        <Button variant="primary" type='submit'>SignUp</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default SignUp