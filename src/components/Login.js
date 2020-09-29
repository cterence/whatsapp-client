import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

const Login = ({ onIdSubmit }) => {
    const idRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        onIdSubmit(idRef.current.value)
    }

    const createNewId = () => {
        onIdSubmit(uuidV4())
    }

    return (
        <Container
            className="d-flex align-items-center"
            style={{ height: '100vh' }}
        >
            <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter your ID</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Button type="submit" className="m-2">
                    Login
                </Button>
                <Button onClick={createNewId} variant="secondary">
                    Create a new ID
                </Button>
            </Form>
        </Container>
    )
}

export default Login
