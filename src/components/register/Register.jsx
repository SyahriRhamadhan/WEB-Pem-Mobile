import { Container, Form, Button, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = () => {
    axios
      .post("https://flightgo-be-server.up.railway.app/v1/api/register-member", {
        email: String(email.target.value),
        password: String(password.target.value),
      })
      .then((response) => {
        navigate("/Login");
        swal({
          title: "Berhasil!",
          text: "Register Berhasil",
          icon: "success",
          button: "Oke",
        });
      })
      .catch((error) => {
        swal(error.response.data.message);
      });
  };
  return (
    <Container ><br /><br /><br /><br /><br />
      <Row className="mt-5">
        <Col md >
          <Form >
            <h1>Register Page</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={setEmail} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={setPassword} />
            </Form.Group>
            <Button className="text-center m-auto w-100" variant="primary" onClick={register}>
              Sign-In
            </Button>
            <p> Already Have A Account?
              <a href="/login">Login</a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Register