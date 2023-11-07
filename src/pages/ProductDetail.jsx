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
  Tabs,
  Tab,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useParams } from "react-router-dom";

const ProductDetail = ({ products, cart, setCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState(0);
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
              style={{ width: "100%", height: "500px" }}
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
        <Grid container my={5}>
          <Grid item>
              <Tabs
              className="tabs"
                value={selectedTab}
                onChange={(event, newValue) => setSelectedTab(newValue)}
                indicatorColor="none"
                textColor="primary"
                allowScrollButtonsMobile
                variant="scrollable"
                centered
              >
                <Tab label="Description" />
                <Tab label="Additional Information" />
                <Tab label="Shipping Details" />
              </Tabs>
              <div className="description">
                <div hidden={selectedTab !== 0}>
                  <Typography variant="h6" marginBottom={2}>Product Information</Typography>
                  <Typography variant="body1" color="textSecondary" lineHeight={1.7} paragraph>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis
                    facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                    Aenean dignissim pellentesque felis. Phasellus ultrices
                    nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
                    vulputate sem tristique cursus.
                  </Typography>
                  <ul>
                    <li>
                      Nunc nec porttitor turpis. In eu risus enim. In vitae
                      mollis elit.
                    </li>
                    <li>Nunc nec porttitor turpis. In eu risus enim.</li>
                    <li>
                      Nunc nec porttitor turpis. In eu risus enim. In vitae
                      mollis elit.
                    </li>
                  </ul>
                  <Typography variant="body1" color="textSecondary" lineHeight={1.7}  paragraph>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis
                    facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                    Aenean dignissim pellentesque felis. Phasellus ultrices
                    nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
                    vulputate sem tristique cursus.
                  </Typography>
                </div>
                <div hidden={selectedTab !== 1}>
                  <Typography variant="h6" marginBottom={2}>Information</Typography>
                  <Typography variant="body1" color="textSecondary" lineHeight={1.7} paragraph>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maiores sapiente officiis quia aspernatur ut ea labore aut
                    nam rem! Libero excepturi assumenda optio perferendis quos
                    fugit qui in sed facilis.Product description goes here Lorem
                    ipsum dolor sit amet,consectetur adipisicing elit.
                    Aspernatur, vitae.
                  </Typography>
                  <Typography variant="h6" marginBottom={2}>Fabric & layer</Typography>
                  <ul>
                    <li>Faux suede fabric</li>
                    <li>Gold tone metal hoop handles.</li>
                    <li>RI branding</li>
                    <li>Snake print trim interior</li>
                    <li>Adjustable cross body strap</li>
                    <li>
                      Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm
                    </li>
                  </ul>
                  <Typography variant="h6" marginBottom={2}>Size</Typography>
                  <Typography variant="body1" color="textSecondary" paragraph>
                    One size
                  </Typography>
                </div>
                <div hidden={selectedTab !== 2}>
                  <Typography variant="h6" marginBottom={2}>Delivery & returns</Typography>
                  <Typography variant="body1" color="textSecondary" lineHeight={1.7} paragraph>
                    We deliver to over 100 countries around the world. For full
                    details of the delivery options we offer, please view our
                    Delivery information We hope you’ll love every purchase, but
                    if you ever need to return an item you can do so within a
                    month of receipt. For full details of how to make a return,
                    please view our Returns information
                  </Typography>
                </div>
              </div>
          </Grid>
        </Grid>

        {/* <Grid container spacing={2} mt={3}>
            {product.additionalImages.map((image, index) => (
            <Grid item xs={6} md={2} key={index}>
                <img src={image} alt={`${product.name} - Image ${index}`} style={{ maxWidth: '100%' }} />
            </Grid>
            ))}
        </Grid> */}
      </Container><hr />
    </div>
  );
};

export default ProductDetail;
