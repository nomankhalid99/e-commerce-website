import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Pagination,
  Rating,
  List,
  ListItem,
  ListItemText,
  Divider,
  Checkbox,
  Button,
  Slider,
  CardActions,
  Breadcrumbs,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Shop = ({ products, cart, setCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [filters, setFilters] = useState({
    category: [],
    sizes: [],
    colors: [],
    price: [0, 100],
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const toggleFilter = (filterType, value) => {
    const currentFilters = filters[filterType];
    const updatedFilters = currentFilters.includes(value)
      ? currentFilters.filter((item) => item !== value)
      : [...currentFilters, value];

    setFilters({ ...filters, [filterType]: updatedFilters });
  };

  const handlePriceChange = (event, newValue) => {
    setFilters({ ...filters, price: newValue });
  };

  const applyFilters = () => {
    const filteredProducts = products.filter((product) => {
      if (
        filters.category.length > 0 &&
        !filters.category.includes(product.category)
      ) {
        return false;
      }
  
      if (filters.sizes.length > 0 && !filters.sizes.includes(product.size)) {
        return false;
      }
  
      if (filters.colors.length > 0 && !filters.colors.includes(product.color)) {
        return false;
      }
  
      const productPrice = parseFloat(product.price);
      if (productPrice < filters.price[0] || productPrice > filters.price[1]) {
        return false;
      }
  
      return true;
    });
  
    console.log("Filtered Products:", filteredProducts);
  };
  

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart);
  };

  return (
    <div className="shop-container">
      <div
        className="fixed-top bg-black"
        style={{ height: "75px", zIndex: "1" }}
      ></div>
      <div className="bg-img">
        <div className="title d-flex justify-content-center align-items-center">
          <h3 className="text-white fs-1">
            <p>Shop</p>
          </h3>
        </div>
      </div>
      <Container>
        <Breadcrumbs className="crum" marginTop={2} marginBottom={2} aria-label="breadcrumb">
          <Link underline="none" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Shop</Typography>
        </Breadcrumbs><hr />
        <Grid container marginBottom={5} spacing={3}>
          <Grid item xs={12} md={3}>
            <List className="list">
              <ListItem>
                <ListItemText primary="Categories" />
              </ListItem>
              {["Clothing", "Bag", "Shoes"].map((category) => (
                <ListItem
                  key={category}
                  components='div'
                  onClick={() => toggleFilter("category", category)}
                >
                  <Checkbox className="check-btn" checked={filters.category.includes(category)} />
                  <ListItemText primary={category} />
                </ListItem>
              ))}
              <Divider />
              <ListItem>
                <ListItemText primary="Sizes" />
              </ListItem>
              {["Small", "Medium", "Large"].map((size) => (
                <ListItem
                  key={size}
                  components='div'
                  onClick={() => toggleFilter("sizes", size)}
                >
                  <Checkbox className="check-btn" checked={filters.sizes.includes(size)} />
                  <ListItemText primary={size} />
                </ListItem>
              ))}
              <Divider />

              <ListItem>
                <ListItemText primary="Colors" />
              </ListItem>
              {["Red", "Blue", "Green"].map((color) => (
                <ListItem
                  key={color}
                  components='div'
                  onClick={() => toggleFilter("colors", color)}
                >
                  <Checkbox className="check-btn" checked={filters.colors.includes(color)} />
                  <ListItemText primary={color} />
                </ListItem>
              ))}
              <Divider />

              <ListItem>
                <ListItemText primary="Price Range" />
              </ListItem>
              <ListItem>
                <Slider
                  value={filters.price}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  min={0}
                  max={100}
                />
              </ListItem>

              <Divider />

              <ListItem>
                <Button onClick={applyFilters} color="primary">
                  Apply Filters
                </Button>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={3}>
              {currentProducts.map((product) => (
                <Grid item key={product.id} xs={12}>
                  <Card className="card">
                    <Grid container>
                      <Grid item md={3}>
                        <CardMedia
                          className="img"
                          component="img"
                          alt={product.name}
                          image={product.image}
                        />
                      </Grid>
                      <Grid item md={6}>
                        <CardContent>
                          <Typography variant="h6">{product.name}</Typography>
                          <Typography variant="p" color="textSecondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Est perspiciatis tenetur alias consequatur
                            inventore rem quasi omnis quae rerum reiciendis!
                          </Typography>
                        </CardContent>
                      </Grid>
                      <Grid item md={3} padding={2}>
                          <Typography variant="h6" className="price">
                            ${product.price}
                          </Typography>
                        <CardActions>
                          <Rating
                            className="rating"
                            color="yellow"
                            name="product-rating"
                            value={product.rating}
                            precision={0.5}
                            readOnly
                          /></CardActions>
                          <CardActions>
                          <Button
                            className="atc-btn"
                            variant="contained"
                            color="primary"
                            onClick={(e) => {
                              e.preventDefault();
                              addToCart(product);
                            }}
                          >
                            <AddShoppingCart />
                            Add to Cart
                          </Button>
                        </CardActions>
                      </Grid>
                    </Grid>
                  </Card>
                  <hr/>
                </Grid>
              ))}
            </Grid>
            <Pagination
              count={Math.ceil(products.length / productsPerPage)}
              page={currentPage}
              variant="outlined"
              shape="rounded"
              onChange={handleChangePage}
              color="primary"
              style={{ marginTop: "20px" }}
            />
          </Grid>
        </Grid>
      </Container><hr />
    </div>
  );
};

export default Shop;
