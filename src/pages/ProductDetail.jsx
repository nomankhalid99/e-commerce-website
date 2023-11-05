import React, { useState } from "react";
import {
  Container,
  Grid,
  Button,
  Typography,
  IconButton,
  Breadcrumbs,
  Link,
  Rating,
} from "@mui/material";
import {Add, Remove} from "@mui/icons-material";
import { useParams } from "react-router-dom";

const ProductDetail = ({ products, cart, setCart }) => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart);
  };

  return (
    <div className="detail-container">
      <div
        className="fixed-top bg-black"
        style={{ height: "75px", zIndex: "1" }}
      ></div>
      <Container maxWidth="lg">
        <Breadcrumbs marginTop={11} marginBottom={2} aria-label="breadcrumb">
          <Link underline="none" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Product</Typography>
        </Breadcrumbs>
        <Grid marginBottom={5} container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "500px", height: "500px" }}
            />
          </Grid>
          <Grid className="product-info" item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>
            <Rating
              className="rating"
              color="yellow"
              name="product-rating"
              value={product.rating}
              precision={0.5}
              readOnly
            />
            <Typography className="price" variant="h6" gutterBottom>
              ${product.price}
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Product description goes here Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Aspernatur, vitae.
            </Typography>
            <div className="qty-btn">
              Qty:
              <IconButton
                color="primary"
                className="incrmnt-btn"
                onClick={handleDecrement}
              >
                <Remove />
              </IconButton>
              {quantity}
              <IconButton
                color="primary"
                className="incrmnt-btn"
                onClick={handleIncrement}
              >
                <Add />
              </IconButton>
            </div>
            <div>
              <Button
                className="atc-btn"
                variant="contained"
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product, quantity);
                }}
              >
                Add to Cart
              </Button>
            </div>
            <hr />
            <Typography variant="body1" color="textSecondary" paragraph>
              Category: {product.category}
            </Typography>
          </Grid>
        </Grid>

        {/* <Grid container spacing={2} mt={3}>
            {product.additionalImages.map((image, index) => (
            <Grid item xs={6} md={2} key={index}>
                <img src={image} alt={`${product.name} - Image ${index}`} style={{ maxWidth: '100%' }} />
            </Grid>
            ))}
        </Grid> */}
      </Container>
    </div>
  );
};

export default ProductDetail;
