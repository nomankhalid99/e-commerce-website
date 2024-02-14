import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Breadcrumb, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTimes } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart: cartProp, setTotalQuantity }) => {
  const [cart, setCart] = useState(cartProp);
  console.log(cart);

 const removeFromCart = (productId) => {
    const removedProduct = cart.find((product) => product.id === productId);
    if (removedProduct) {
      const updatedCart = cart.filter((product) => product.id !== productId);
      setCart(updatedCart);
      setTotalQuantity((prevQuantity) => prevQuantity - (removedProduct.quantity || 1));
      localStorage.setItem("myCart", JSON.stringify(updatedCart));
    }


  };

  const incrementQuantity = (productId) => {
    const updatedCart = cart.map((product) =>
      product.id === productId
        ? { ...product, quantity: (product.quantity || 0) + 1 }
        : product
    );
    setCart(updatedCart);
  };

  const decrementQuantity = (productId) => {
    const updatedCart = cart.map((product) =>
      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setCart(updatedCart);
  };

  const calculateTotalBill = () => {
    return cart.reduce(
      (total, product) => total + parseFloat(product.price) * (product.quantity || 1),
      0
    );
  };

  useEffect(()=>{
    localStorage.setItem('myCart', JSON.stringify(cart))
  },[cart])

  const resetCart = () => {
    localStorage.removeItem('myCart');
    setCart([]);
    setTotalQuantity(0);
  };

  return (
    <div className="cart-container">
    <div className='fixed-top bg-black' style={{height:'95px',zIndex:'1'}}></div>
      <div className="bg-img">
        <div className="title d-flex justify-content-center align-items-center">
          <h3 className="text-white fs-1">
            <p>Shopping Cart</p>
          </h3>
        </div>
      </div>
      <Container>
        <Row>
          <Col>
            <Breadcrumb className="crum mt-3">
              <Breadcrumb.Item className="crum-item" href="/">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Shopping Cart</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <hr className="mt-0" />
        <Row className="my-5 text-center content d-flex">
          {cart.length > 0 ? (
            <Col sm={12} md={8}>
              <div>
                <Row className="labels">
                  <Col sm={5} className="d-flex ps-5 align-items-center">
                    <p>Product</p>
                  </Col>
                  <Col sm={2} className="d-flex align-items-center">
                    <p>Price</p>
                  </Col>
                  <Col sm={2} className="d-flex align-items-center">
                    <p>Quantity</p>
                  </Col>
                  <Col sm={2} className="d-flex align-items-center">
                    <p>Total</p>
                  </Col>
                </Row>
                {cart.map((product) => (
                  <Card key={product.id} className="mb-3">
                    <Card.Body>
                      <Row className="align-items-center">
                        <Col xs={12} sm={2}>
                          <img
                            src={product.image}
                            style={{ height: "120px" }}
                            alt={product.name}
                            className="img-fluid"
                          />
                        </Col>
                        <Col xs={12} sm={3} className="d-flex align-items-center">
                          <h5>{product.name}</h5>
                        </Col>
                        <Col xs={9} sm={2} className="d-flex fs-5 align-items-center">
                          <p  >${product.price}</p>
                        </Col>
                        <Col
                          xs={6}
                          sm={2}
                          className="d-flex justify-content-center align-items-center"
                        >
                          <Button
                            variant="primary"
                            className="cart-btn increment-btn"
                          >
                            <span
                              className="minus-btn"
                              onClick={() => decrementQuantity(product.id)}
                            >
                              -
                            </span>                         
                            {product.quantity || 1}
                            <span
                              className="plus-btn"
                              onClick={() => incrementQuantity(product.id)}
                            >
                              +
                            </span>
                          </Button>
                        </Col>
                        <Col xs={12} sm={2} className="d-flex fs-5 align-items-center">
                        <p style={{color:'rgb(210, 88, 88)'}}>${(product.price * (product.quantity || 1)).toFixed(2)}</p>
                        </Col>
                        <Col
                          xs={12} sm={1}
                          className="d-flex justify-content-center align-items-center"
                        >
                          <Button
                            variant="danger"
                            className="cart-btn cancel-btn"
                            onClick={() => removeFromCart(product.id)}
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Col>
          ) : (
            <Col sm={12} className="text-center">
              <div className="d-flex flex-column align-items-center">
                <p className="icon">
                  <FontAwesomeIcon icon={faCartShopping} />
                </p>
                <p>No product added to the cart</p>
                <Link to="/" className="text-decoration-none btn" onClick={resetCart}>
                  Back to Home
                </Link>
              </div>
            </Col>
          )}
          {cart.length > 0 && (
            <Col sm={12} md={4}>
              <Card style={{ height: "200px" }}>
                <Card.Body>
                    <h4>Cart Total</h4>
                    <hr />
                    <h4 >Total : <span  style={{color:'rgb(210, 88, 88)'}}>${calculateTotalBill().toFixed(2)}</span></h4>
                    <Link to='/checkout' className="checkout-btn">Checkout</Link> 
                </Card.Body>
              </Card>
              <Link to="/" className="text-decoration-none btn">
                  Continue Shopping
                </Link>
            </Col>
          )}
        </Row>
        <hr />
      </Container>
    </div>
  );
};

export default Cart;
