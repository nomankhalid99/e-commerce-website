import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewArrivals = ({ cart, products, setCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showMore, setShowMOre] = useState(false);

  const filterProductsInRange = (products) => {
    return products.filter((product) => product.id >= 1 && product.id <= 12);
  };

  const allProducts = filterProductsInRange(products);

  const filteredProducts = selectedCategory === "All"
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

  const displayedProducts = showMore
    ? filteredProducts
    : filteredProducts.slice(0, 8);


    const specialProducts = products.filter((product) => product.id === 13 || product.id === 14);

  const toggleShowMore = () => {
    setShowMOre(!showMore);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart);
  };

  return (
    <Container className="arrival">
      <Row className="cards-row mt-5">
        <div className="headline">
          <h1 className="text-center fs-2 mb-4">New Arrivals</h1>
        </div>
        <div className="category-buttons mb-4">
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
              selectedCategory === "Clothing" ? "active" : ""
            }`}
            onClick={() => setSelectedCategory("Clothing")}
          >
            Clothing
          </button>
          <button
            className={`category-button ${
              selectedCategory === "Bag" ? "active" : ""
            }`}
            onClick={() => setSelectedCategory("Bag")}
          >
            Bag
          </button>
          <button
            className={`category-button ${
              selectedCategory === "Shoes" ? "active" : ""
            }`}
            onClick={() => setSelectedCategory("Shoes")}
          >
            Shoes
          </button>
        </div>
        {displayedProducts.map((product) => (
          <Col key={product.id} lg={3} md={4} sm={6} className="mb-4">
            <Card className="arrival-cards">
              <Link
                to={`/product/${product.id}`}
                className="text-decoration-none text-black"
              >
                <span className="mb-1 d-flex new">{product.new}</span>
                {product.tag && (
                  <span
                    className={`mb-1 d-flex top tag-${product.tag.replace(
                      /\s+/g,
                      "_"
                    )}`}
                  >
                    {product.tag}
                  </span>
                )}
                <Card.Img
                  className="img"
                  style={{ height: "300px" }}
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
          </Col>
        ))}
      </Row>
      {filteredProducts.length > 8 && (
        <Row className="mb-5">
          <Col className="text-center">
            {showMore ? (
              <Button
                variant="secondary"
                className="toggle-button"
                onClick={toggleShowMore}
              >
                Show Less
              </Button>
            ) : (
              <Button
                variant="primary"
                className="toggle-button"
                onClick={toggleShowMore}
              >
                Show More
              </Button>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default NewArrivals;
