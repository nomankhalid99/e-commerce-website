import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductList = ({ cart, products, setCart }) => {
  console.log(cart);

  const sliderProducts = products.filter(
    (product) => product.id >= 15 && product.id <= 19
  );

  const [selectedCategory, setSelectedCategory] = useState("All");

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? sliderProducts
      : sliderProducts.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <Container>
      <div className="mt-5"></div>
      <Row>
        <Col>
          <div className="headline">
            <h1 className="text-center fs-2 mb-4">Trendy Products</h1>
          </div>
          <div className="category-buttons">
            <button
              className={`category-button ${
                selectedCategory === "All" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              {" "}
              All
            </button>
            <button
              className={`category-button ${
                selectedCategory === "Men" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("Men")}
            >
              Men
            </button>
            <button
              className={`category-button ${
                selectedCategory === "Women" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("Women")}
            >
              Women
            </button>
          </div>
          <Slider {...settings} className=" slider my-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="px-2">
                <Card className="product-card">
                  <Link
                    to={`/product/${product.id}`}
                    className="text-decoration-none text-black"
                  >
                    <span className="mb-1 d-block new">{product.new}</span>
                    <span className="d-block top">{product.tag}</span>
                    <Card.Img
                      className="img"
                      style={{ height: "350px" }}
                      variant="top"
                      src={product.image}
                    />
                    <Button
                      variant="primary"
                      className="btn"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Link>
                  <Card.Body>
                    <Card.Title className="title">{product.name}</Card.Title>
                    <Card.Text className="price">${product.price}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
