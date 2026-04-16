import { useState } from 'react'
import { Alert, Card, Form, Button, InputGroup } from 'react-bootstrap'
import { FaEyeSlash, FaEye } from 'react-icons/fa6';
import Loading from './Loading';
import { get as getUtenti } from '../services/utenti'

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [utenti, setUtenti] = useState([])

    return <Card style={{ width: '18rem'}}>
        <Card.Header className="text-center">
            <Card.Title>Login</Card.Title>
        </Card.Header>
        <Card.Body>
            { (isError) && <Alert variant="danger">Login fallita.</Alert> }
            <Form 
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const formDataObj = Object.fromEntries(formData.entries());

                    setIsLoading(true)
                    setIsError(false)
                    const fetchUtenti = async function() {
                        let tempUtenti = await getUtenti(formDataObj);
                        setUtenti(tempUtenti);
                        setIsLoading(false);
                        if (utenti.length == 1) {
                            // Loggato!
                        } else {
                            setIsError(true)
                        }
                    }
                    fetchUtenti();
                }}
            >
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="user@example.com" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                     <InputGroup>
                        <Form.Control name="password" type={showPassword ? 'text' : 'password'} required />
                        <Button 
                            variant="outline-primary"
                            onClick={() => {
                                setShowPassword(!showPassword)
                            }}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye /> }
                        </Button>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="d-flex justify-content-center gap-2">
                    <Button 
                        type="submit" 
                        variant="primary" 
                        disabled={isLoading}
                    >
                        Login
                    </Button>
                    {
                        (isLoading) && <Loading />
                    }
                </Form.Group>
            </Form>
        </Card.Body>
    </Card>;
}