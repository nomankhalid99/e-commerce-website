import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Breadcrumb,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      <div
        className="fixed-top bg-black"
        style={{ height: "95px", zIndex: "1" }}
      ></div>
      <Container className="mb-5 login">
        <Row>
          <Col>
            <Breadcrumb className="crum mt-4">
              <Breadcrumb.Item className="crum-item" href="/">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item className="crum-item" href="#">
                Pages
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Login</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row className="card-row">
          <Col md={6}>
            <Card className="card p-5">
              <Card.Header className="d-flex justify-content-around bg-white">
                <Link onClick={toggleForm} className="h-btn">
                  Login
                </Link>
                <Link onClick={toggleForm} className="h-btn">
                  SignUp
                </Link>
              </Card.Header>
              <Card.Body>
                <Form>
                  {isLogin ? (
                    <Form.Group controlId="formBasicEmail" className="mb-3">
                      <Form.Label>Username or email address</Form.Label>
                      <Form.Control className="mb-3" type="email" required />
                      <Form.Label>Password</Form.Label>
                      <Form.Control className="mb-3" type="password" required />
                      <Form.Check
                        className="mb-3"
                        type="checkbox"
                        label="Remember me"
                      />
                      <Link className="mb-3 d-block text-decoration-none">Forget Password?</Link>
                      <Link to='/' className="btn" type="submit">
                        Login
                      </Link>
                    </Form.Group>
                  ) : (
                    <Form.Group
                      controlId="formBasicPAsswordConfirmed"
                      className="mb-3"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control className="mb-3" type="email" required />
                      <Form.Label>Password</Form.Label>
                      <Form.Control className="mb-3" type="password" required />
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control className="mb-3" type="password" required />
                      <Form.Check
                        type="checkbox"
                        className="mb-4"
                        label="I agree to the privacy policy"
                      />
                      <Button className="btn" variant="primary" type="submit">
                        Sign Up
                      </Button>
                    </Form.Group>
                  )}
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
