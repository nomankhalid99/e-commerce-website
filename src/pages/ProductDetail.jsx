import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Button,
  Typography,
  IconButton,
  Breadcrumbs,
  Rating,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Add, Remove,AddShoppingCart } from "@mui/icons-material";
import { useParams,Link } from "react-router-dom";

const ProductDetail = ({ products, cart, setCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState(0);
  const [sliderProducts, setSliderProducts] = useState([]);
  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));


  useEffect(() => {
    const selectCategoryProducts = (products, currentProduct) => {
      const category = currentProduct.category;
      const categoryProducts = products.filter(
        (product) =>
          product.category === category && product.id !== currentProduct.id
      );

      const uniqueProducts = Array.from(
        new Set(categoryProducts.map((product) => product.id))
      ).map((id) => {
        return categoryProducts.find((product) => product.id === id);
      });

      if (uniqueProducts.length <= 5) {
        return uniqueProducts.concat(uniqueProducts);
      }

      return uniqueProducts.slice(0, 5); 
    };

    const product = products.find((product) => product.id === Number(id));
    const categoryProducts = selectCategoryProducts(products, product);
    setSliderProducts(categoryProducts);
  }, [products, id]);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [mainImage, setMainImage] = useState(product.image);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!sliderProducts) {
    return <div>Product not found</div>;
  }

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart);
  };

  const handleMouseMove = (e) => {
    const image = e.target;
    const imageRect = image.getBoundingClientRect();
    const x = e.clientX - imageRect.left;
    const y = e.clientY - imageRect.top;

    const scale = 1.5;

    const translateX = (x - imageRect.width / 2) * (scale - 1);
    const translateY = (y - imageRect.height / 2) * (scale - 1);

    const transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    image.style.transform = transform;
  };

  const handleMouseOver = (e) => {
    e.target.style.overflow = "hidden";
  };

  const handleMouseOut = (e) => {
    e.target.style.overflow = "visible";
    e.target.style.transform = "scale(1)";
  };

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

  return (
    <div className="detail-container">
      <div
        className="fixed-top bg-black"
        style={{ height: "95px", zIndex: "2" }}
      ></div>
      <Container maxWidth="lg">
        <Breadcrumbs className="crum" marginTop={14} marginBottom={2} aria-label="breadcrumb">
          <Link underline="none" color="inherit" to="/">
            Home
          </Link>
          <Typography color="text.primary">Product</Typography>
        </Breadcrumbs>
        <Grid marginBottom={5} container spacing={2}>
          <Grid item xs={3} md={1}>
            <div className="additional-images">
              {product.additionalImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} - Additional Image ${index}`}
                  style={{
                    width: "100%",
                    height: "120px",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => setMainImage(image)}
                />
              ))}
            </div>
          </Grid>
          <Grid item xs={9} sm={8} md={6}>
            <div className="main-img-container">
              {product.new && (
                <span className="mb-1 d-flex new">{product.new}</span>
              )}
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
              <img
                src={mainImage}
                alt={product.name}
                className="main-img"
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseOver={(e) => handleMouseOver(e)}
                onMouseOut={(e) => handleMouseOut(e)}
              />
            </div>
          </Grid>
          <Grid className="product-info" item xs={12} sm={5}>
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
                <AddShoppingCart />
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
                <Typography variant="h6" marginBottom={2}>
                  Product Information
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  lineHeight={1.7}
                  paragraph
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna viverra non, semper suscipit,
                  posuere a, pede. Donec nec justo eget felis facilisis
                  fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                  dignissim pellentesque felis. Phasellus ultrices nulla quis
                  nibh. Quisque a lectus. Donec consectetuer ligula vulputate
                  sem tristique cursus.
                </Typography>
                <ul>
                  <li>
                    Nunc nec porttitor turpis. In eu risus enim. In vitae mollis
                    elit.
                  </li>
                  <li>Nunc nec porttitor turpis. In eu risus enim.</li>
                  <li>
                    Nunc nec porttitor turpis. In eu risus enim. In vitae mollis
                    elit.
                  </li>
                </ul>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  lineHeight={1.7}
                  paragraph
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna viverra non, semper suscipit,
                  posuere a, pede. Donec nec justo eget felis facilisis
                  fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                  dignissim pellentesque felis. Phasellus ultrices nulla quis
                  nibh. Quisque a lectus. Donec consectetuer ligula vulputate
                  sem tristique cursus.
                </Typography>
              </div>
              <div hidden={selectedTab !== 1}>
                <Typography variant="h6" marginBottom={2}>
                  Information
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  lineHeight={1.7}
                  paragraph
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maiores sapiente officiis quia aspernatur ut ea labore aut nam
                  rem! Libero excepturi assumenda optio perferendis quos fugit
                  qui in sed facilis.Product description goes here Lorem ipsum
                  dolor sit amet,consectetur adipisicing elit. Aspernatur,
                  vitae.
                </Typography>
                <Typography variant="h6" marginBottom={2}>
                  Fabric & layer
                </Typography>
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
                <Typography variant="h6" marginBottom={2}>
                  Size
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  One size
                </Typography>
              </div>
              <div hidden={selectedTab !== 2}>
                <Typography variant="h6" marginBottom={2}>
                  Delivery & returns
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  lineHeight={1.7}
                  paragraph
                >
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
        <Grid container marginY={5}>
          <Grid item xs={12}>
          <Typography variant="h4" align="center" marginBottom={5}>
                  You May Also Like
                </Typography>
            <Slider {...settings} className="slider my-4">
              {sliderProducts.map((product) => (
                <div key={product.id} className="px-2">
                  <Card className="product-card">
                    <Link
                      to={`/product/${product.id}`}
                      className="text-decoration-none text-black"
                    >
                      <CardMedia
                        component="img"
                        alt={product.name}
                        height="350"
                        image={product.image}
                      />
                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          className="btn"
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                          }}
                        >
                          <AddShoppingCart />
                          Add to Cart
                        </Button>
                      </CardActions>
                      <CardContent>
                        <Typography variant="h5" className="title">
                          {product.name}
                        </Typography>
                        <Typography variant="h6" className="price">
                          ${product.price}
                        </Typography>
                      </CardContent>        
                    </Link>
                  </Card>
                </div>
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Container>
      <hr />
    </div>
  );
};

export default ProductDetail;
