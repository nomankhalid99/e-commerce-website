import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Offers = () => {
  return (
   <Container>
        <Row>
        <Col md={6} className="mt-5">
          <Card className="offer-card">
            <Card.Img
              className="img1"
              variant="img-overlay"
              src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150478960.jpg?size=626&ext=jpg&ga=GA1.2.308676283.1695359063&semt=ais"
            />
            <Link href="#" className="content text-white">
              <Card.ImgOverlay>
                <p>Trendind Now</p>
                <h3>This Week's Most Wanted</h3>
                <Button variant="primary" className="btn text-uppercase"
                onClick={(e)=>e.preventDefault()}>
                  Discover Now{" "}
                </Button>
              </Card.ImgOverlay>
            </Link>
          </Card>
        </Col>
        <Col md={6} className="mt-md-5 mt-4 d-flex flex-column justify-content-between">
          <Card className="offer-card mb-4">
            <Card.Img
              style={{ height: "300px" }}
              variant="img-overlay"
              src="https://img.freepik.com/free-photo/gym-composition-with-sport-elements_23-2147915635.jpg?w=996&t=st=1695663413~exp=1695664013~hmac=c66339d2ee7c9b7075f25f9129250d63f82b67a013ac8ac36aa853ac0ef29737"
            />
            <Link href="#" className="contentOne text-white">
              <Card.ImgOverlay>
                <p>Limited time only</p>
                <h3>Trains & Sportswear Sales Up to 70% off</h3>
                <Button variant="primary" className="btn text-uppercase"
                onClick={(e)=>e.preventDefault()}>
                  Shop Now
                </Button>
              </Card.ImgOverlay>
            </Link>
          </Card>
          <Card className="offer-card">
            <Card.Img
              style={{ height: "300px" }}
              variant="img-overlay"
              src="https://img.freepik.com/free-photo/clothing-rack-with-floral-hawaiian-shirts-hangers-hat_23-2149366017.jpg?w=996&t=st=1695662578~exp=1695663178~hmac=0f765ad0f5e73fa3289fe3dfce6043882857bcb9fd3437345498695d8fe0c0e6"
            />
            <Link href="#" className="contentOne text-black">
              <Card.ImgOverlay>
                <p>This week we love</p>
                <h3>Womens Holiday clothes</h3>
                <Button
                  variant="primary"
                  className="btn1 text-uppercase"
                  onClick={(e)=>e.preventDefault()}
                >
                  Discover now
                </Button>
              </Card.ImgOverlay>
            </Link>
          </Card>
        </Col>
      </Row>
   </Container>
  )
}

export default Offers