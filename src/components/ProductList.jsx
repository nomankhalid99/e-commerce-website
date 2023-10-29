import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ProductList = ({cart, setCart}) => {
  console.log(cart)
  const products = [
    {
      id: 1,
      name: "Silk-blend Suit",
      price: '60.00',
      image:
        "https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-7413.jpg?w=360&t=st=1695490904~exp=1695491504~hmac=6d96249783ba95ecc188d9150c1224e7c5ef0edc1d698d1655fdab728eb794e8",
      category: "Women",
    },
    {
      id: 2,
      name: "Women leather hand bag",
      price: '84.00',
      image:
        "https://img.freepik.com/free-photo/women-white-glamour-background-fashion_1203-6545.jpg?w=740&t=st=1696344154~exp=1696344754~hmac=c567518ca086ea3805b1008a330ac32d21def2890b61d531c282387417a75ff4",
      category: "Women",
    },
    {
      id: 3,
      name: "Fashion Shoes",
      price: '80.00',
      image:
        "https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176689.jpg?w=740&t=st=1696344456~exp=1696345056~hmac=2b0b7765b56631aeb1924511b0deb4c0cca614b19d7b668f50c2811a810c21dc",
      category: "Women",
    },

    {
      id: 4,
      name: "Bag Pack",
      price: '19.99',
      image:
        "https://img.freepik.com/free-photo/beautiful-backpack-white_1339-7960.jpg?w=740&t=st=1696344236~exp=1696344836~hmac=5b9ebd5571d2327bc866aa0e6c0163f20fbe6843e1dedbccf4f10baa8f2e1852",
      category: "Men",
    },

    {
      id: 5,
      name: "West Dress",
      price: '80.00',
      image:
        "https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-8302.jpg?w=360&t=st=1695490871~exp=1695491471~hmac=048238f0218013a318848b3b34d27f275fef25a1adf4a59f5a4678b56a09e0bf",
      category: "Women",
    },
  ];

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
    setCart([...cart, product ])
    console.log(cart);
  }

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

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
                  <Card.Link
                    href="#"
                    className="text-decoration-none text-black"
                  >
                    <span className="mb-1 d-block new">New</span>
                    <span className="d-block top">Top</span>
                    <Card.Img
                      className="img"
                      style={{ height: "350px" }}
                      variant="top"
                      src={product.image}
                    />
                    <Button variant="primary" 
                    className="btn"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    >
                      Add to Cart
                    </Button>
                  </Card.Link>
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
