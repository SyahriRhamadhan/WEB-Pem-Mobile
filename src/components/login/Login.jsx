import { Container, Form, Button, Row, Col } from "react-bootstrap"
import axios from "axios";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userLogin, setUserLogin] = useState(false);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    useEffect(() => {
        token ? setUserLogin(true) : setUserLogin(false);
    }, [token]);

    const login = () => {
        axios
            .post("https://flightgo-be-server.up.railway.app/v1/api/Login", {
                email: String(email.target.value),
                password: String(password.target.value),
            })
            .then((response) => {
                localStorage.setItem("token", response.data.data.accessToken);
                localStorage.setItem("role", response.data.data.role);
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
                swal("Login Success", {
                    icon: "success",
                });
                const user = response.data.data.role
                if (user === "admin") {
                    navigate("/listorder");
                } else if (user === "member") {
                    navigate("/landing");
                }
            })
            .catch((error) => {
                swal(error.response.data.message);
            });
    };
    return (
        <Container ><br /><br /><br /><br /><br />
            {!userLogin ? (
                <Row className="mt-5">
                    <Col md={12} >
                        <Form >
                            <h1>Login Page</h1>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className="" type="email" placeholder="Enter email" onChange={setEmail} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={setPassword} />
                            </Form.Group>
                            <Button onClick={login} className="text-center m-auto w-100" variant="primary" > Login</Button>
                            <p> Not a FlightGo Member?
                                <a href="/Register">Register</a>
                            </p>
                        </Form>
                    </Col>
                </Row>
            ) : null}
        </Container>

    )
}

export default Login