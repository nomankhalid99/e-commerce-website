import React, { useState,useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Breadcrumb,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Checkout = ({ cart }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    cardNumber: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      email: "",
      address: "",
      cardNumber: "",
      phone: "",
    });
  };

  const calculateTotalBill = () => {
    return cart.reduce((total, product) => {
      const price = parseFloat(product.price.replace('$', ''));
      const quantity = parseFloat(product.quantity || 0);
      return total + price * quantity;
    }, 0);
  };

  useEffect(()=>{
    localStorage.setItem('myCart', JSON.stringify(cart))
  },[cart])

  return (
    <div className="checkout-container">
      <div
        className="fixed-top bg-black"
        style={{ height: "95px", zIndex: "1" }}
      ></div>
      <div className="bg-img">
        <div className="title d-flex justify-content-center align-items-center">
          <h3 className="text-white fs-1">
            <p>Checkout</p>
          </h3>
        </div>
      </div>
      <Container className="mb-5">
        <Row>
          <Col>
            <Breadcrumb className="crum mt-2">
              <Breadcrumb.Item className="crum-item" href="/">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Checkout</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <hr className="mt-0" />
        <Row className="content mt-0">
          <h4>Billing Details</h4>
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Full Name *</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3"  controlId="email">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="cardNumber">
                <Form.Label>Card Number *</Form.Label>
                <Form.Control
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Label>Phone *</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Form>
          </Col>
          <Col md={4}>
            <Card >
              <Card.Body>
                <h4>Your Order</h4>
                <hr />
                <div>
                  {cart.map((product) => {
                    const price = parseFloat(product.price);
                    const quantity = parseFloat(product.quantity || 1);
                    if (isNaN(price) || isNaN(quantity)) {
                      console.log(
                        `Product with ID ${product.id} has invalid price or quantity: price=${price}, quantity=${quantity}`
                      );
                    }
                    return (
                      <div
                        key={product.id}
                        className="d-flex justify-content-between"
                      >
                        <span>
                          {product.name} (x{quantity}):
                        </span>
                        <span>${(price * quantity).toFixed(2)}</span>
                      </div>
                    );
                  })}
                </div>
                <hr />
                <h4>
                  Total :{" "}
                  <span style={{ color: "rgb(210, 88, 88)" }}>
                    ${calculateTotalBill().toFixed(2)}
                  </span>
                </h4><hr />
                <div className="payment-method">
                  <h5>Select Payment Method</h5>
                  <Form.Check
                    type="radio"
                    name="paymentMethod"
                    label="Credit Card"
                    value="creditCard"
                    checked={paymentMethod === "creditCard"}
                    onChange={handlePaymentMethodChange}
                  />
                  <Form.Check
                    type="radio"
                    name="paymentMethod"
                    label="PayPal"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={handlePaymentMethodChange}
                  />
                  <Form.Check
                    type="radio"
                    name="paymentMethod"
                    label="Cash on Delivery"
                    value="cashOnDelivery"
                    checked={paymentMethod === "cashOnDelivery"}
                    onChange={handlePaymentMethodChange}
                  />
                  <Form.Check
                    type="radio"
                    name="paymentMethod"
                    label="Other"
                    value="other"
                    checked={paymentMethod === "other"}
                    onChange={handlePaymentMethodChange}
                  />
                </div><hr />
                <Link to="/checkout" className="checkout-btn">
                  Place Order
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
