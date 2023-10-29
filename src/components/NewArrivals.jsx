import React,{useState} from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const NewArrivals = ({cart, setCart}) => {
  const products = [
    {
      id: 1,
      tag: 'Sale',
      name: "Casual Dress",
      price: "60.00",
      image:
        "https://img.freepik.com/free-photo/full-shot-smiling-blonde-woman_23-2148316636.jpg?w=740&t=st=1696524313~exp=1696524913~hmac=32e3d545b6c06efa3b13a01cbd80ff7fe27050c048690dd60e98a6499bd3a8d4",
      category: "Clothing",
    },
    {
      id: 2,
      name: "Women leather hand bag",
      price: "84.00",
      image:
        "https://img.freepik.com/free-photo/women-white-glamour-background-fashion_1203-6545.jpg?w=740&t=st=1696344154~exp=1696344754~hmac=c567518ca086ea3805b1008a330ac32d21def2890b61d531c282387417a75ff4",
      category: "Bag",
    },
    {
      id: 3,
      tag: 'Out of Stock',
      name: "Fashion Shoes",
      price: "80.00",
      image:
        "https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176689.jpg?w=740&t=st=1696344456~exp=1696345056~hmac=2b0b7765b56631aeb1924511b0deb4c0cca614b19d7b668f50c2811a810c21dc",
      category: "Shoes",
    },

    {
      id: 4,
      tag: 'Top',
      name: "Bag Pack",
      price: "19.99",
      image:
        "https://img.freepik.com/free-photo/beautiful-backpack-white_1339-7960.jpg?w=740&t=st=1696344236~exp=1696344836~hmac=5b9ebd5571d2327bc866aa0e6c0163f20fbe6843e1dedbccf4f10baa8f2e1852",
      category: "Bag",
    },

    {
      id: 5,
      name: "West Dress",
      price: "80.00",
      image:
        "https://img.freepik.com/free-photo/portrait-beautiful-cute-brunette-woman-model-casual-autumn-gray-sweater-clothes-with-no-makeup-isolated-white-with-handbag_158538-14392.jpg?w=740&t=st=1696524177~exp=1696524777~hmac=3ef034ff598fa1779c716294fd1f31a9d3f214c59c04f1cd5ff2e8c29f3eb925",
      category: "Clothing",
    },
    {
      id: 6,
      tag: 'Top',
      name: "Cool Heel",
      price: "334.00",
      image:
        "https://img.freepik.com/free-photo/woman-shoes_1203-8746.jpg?w=996&t=st=1696519471~exp=1696520071~hmac=dcd1a954d33dbfe2c3fd1ec1a0027a91b3ab939d4fd20d35abca2b6b1ae19329",
      category: "Shoes",
    },
    {
      id: 7,
      tag: 'Out of Stock',
      name: "White Suit",
      price: "67.00-$76.00",
      image:
        "https://img.freepik.com/free-photo/portrait-beautiful-caucasian-smiling-brunette-woman-model-white-summer-stylish-dress_158538-2727.jpg?w=740&t=st=1696519391~exp=1696519991~hmac=37fcf5cc8364e8080b1a196184955535a1db1bccbdb7fe513496b0b81301279f",
      category: "Clothing",
    },
    {
      id: 8,
      name: "Bucket Bag",
      price: "84.00",
      image:
        "https://img.freepik.com/free-photo/beautiful-men-fashion-with-leather-messenger-bag_1203-7607.jpg?w=360&t=st=1696522045~exp=1696522645~hmac=cf509ac978aacb9b0fd4851651e8615c12f54b154d356cd4296a9649aa5b8690",
      category: "Bag",
    },
    {
      id: 9,
      tag: 'Sale',
      name: "Sweat Shirt",
      price: "341.00",
      image:
        "https://img.freepik.com/free-photo/pink-sweater-front_125540-746.jpg?w=900&t=st=1696522118~exp=1696522718~hmac=ef6dab1b04ef8874c8b27d2c4b9491051c2947ad2165689d9d669b31742e5708",
      category: "Clothing",
    },
    {
      id: 10,
      tag: 'Top',
      name: "Off-White Khusa",
      price: "19.99",
      image:
        "https://img.freepik.com/free-photo/women-s-beige-low-heel-shoes-fashion_53876-101528.jpg?w=900&t=st=1696521863~exp=1696522463~hmac=cea8960033165f8c38b21c9df2a9ca091ea4ef4122bfb7fa4cd212410f8253e4",
      category: "Shoes",
    },
    {
      id: 11,
      name: "Linen-blend Dress",
      price: "24.00",
      image:
        "https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated_158538-8562.jpg?w=740&t=st=1696524073~exp=1696524673~hmac=da21a31067c6864e611347c8c9e26c951eeb00e04470f2bfa0c921d35f5045f1",
      category: "Clothing",
    },
    {
      id: 12,
      tag: 'Out of Stock',
      name: "White Over-coat",
      price: "119.00",
      image:
        "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-brunette-hipster-young-woman-model-white-coat-jacket-big-black-hat_158538-2842.jpg?w=740&t=st=1696524111~exp=1696524711~hmac=544e572efe732898047116b87e63e8639c34fa839f57349212bf59e801506c73",
      category: "Clothing",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showMore,setShowMOre] = useState(false)

  const filteredProducts =
  selectedCategory === "All"
    ? products
    : products
        .filter((product) => product.category === selectedCategory)

  const displayedProducts = showMore ? filteredProducts : filteredProducts.slice(0 , 8);

  const toggleShowMore = () =>{
    setShowMOre(!showMore);
  };

  const addToCart = (product) => {
    setCart([...cart, product ])
    console.log(cart);
  }


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
              <Card.Link href="#" className="text-decoration-none text-black">
              <span className="mb-1 d-flex new">New</span>
              {product.tag && (
                  <span  className={`mb-1 d-flex top tag-${product.tag.replace(/\s+/g, '_')}`}>{product.tag}</span>
                )}
                <Card.Img
                  className="img"
                  style={{ height: "300px" }}
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
          </Col>
        ))}
      </Row>
      {filteredProducts.length > 8 && (
        <Row className="mb-5">
          <Col className="text-center">
            {showMore ? (
              <Button variant="secondary" className="toggle-button" onClick={toggleShowMore}>
                  Show Less
              </Button>
            ): (
              <Button variant="primary" className="toggle-button" onClick={toggleShowMore}>
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
