import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='py-4'>
        <Container>
            <Row>
                <Col md= {6}>
                   <img src="/logo-b.png" alt="logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit provident laboriosam inventore delectus modi perferendis suscipit, corporis eos nam asperiores. Officiis illum pariatur ipsam ex est repellat placeat nobis veniam.
                    </p>
                    <div>
                        <p>Got Question?Call us 24/7</p>
                        <a href="#" className='text-decoration-none'>+0123 456 789</a>
                    </div>
                </Col>
                <Col md= {2}>
                    <h5>Information</h5>
                    <ul className='list-unstyled'>
                        <li><a href="#">About Store</a></li>
                        <li><a href="#">How to shop on Store</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="/login">Log in</a></li>
                    </ul>
                </Col>
                <Col md= {2}>
                    <h5>Customer Services</h5>
                    <ul className='list-unstyled'>
                        <li><a href="#">Payment Methods</a></li>
                        <li><a href="#">Money back guarantee</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Shiping</a></li>
                        <li><a href="#">Terms and conditions</a></li>
                        <li><a href="#">Privaacy policy</a></li>
                    </ul>
                </Col>
                <Col md= {2}>
                    <h5>My Account</h5>
                    <ul className='list-unstyled'>
                        <li><a href="#">Sign In</a></li>
                        <li><a href="/cart">View Cart</a></li>
                        <li><a href="#">My Wishlist</a></li>
                        <li><a href="#">Track My Order</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </Col>
            </Row><hr className="mt-5" />
            <div className='text-center'>
                <p className="py-2">Copyright &copy; 2023 <a href="#">Grand Galleria </a>All Rights Reserved</p>
            </div>
        </Container>
    </footer>
  )
}

export default Footer