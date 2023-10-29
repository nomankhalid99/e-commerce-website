import React from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'

const Special = ({cart, setCart}) => {
    const products = [
        {
          id: 1,
          name: "White Suit",
          price: '67.00-$76.00',
          image:
            "https://img.freepik.com/free-photo/portrait-beautiful-caucasian-smiling-brunette-woman-model-white-summer-stylish-dress_158538-2727.jpg?w=740&t=st=1696519391~exp=1696519991~hmac=37fcf5cc8364e8080b1a196184955535a1db1bccbdb7fe513496b0b81301279f",
        
        },
        {
          id: 2,
          name: "Cool Heels",
          price: '334.00',
          image:
            "https://img.freepik.com/free-photo/woman-shoes_1203-8746.jpg?w=996&t=st=1696519471~exp=1696520071~hmac=dcd1a954d33dbfe2c3fd1ec1a0027a91b3ab939d4fd20d35abca2b6b1ae19329",
          
        }]

const addToCart = (product) => {
  setCart([...cart, product ])
  console.log(cart);
}

  return (
    <Container className='special'>
        <Row >
            <Col lg={6} className="mb-5">
                <div className='px-5 py-3 special-text text-center'> 
                    <p className='p1'>Special</p>
                    <strong>Refine Your Style</strong>
                    <p className='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores unde nesciunt earum repudiandae?</p>
                </div>
               <Row className='cards-row'>
               {products.map((product) => (
                 <Col key={product.id} md={6} className="mb-3">
                   <Card className="special-card ">
                     <Card.Link
                       href="#"
                       className="text-decoration-none text-black">
                       <Card.Img
                         className="img"
                         style={{ height: '200px' }}
                         variant="top"
                         src={product.image}/>
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
            </Col>
            <Col lg={6} className="mb-5">
            <Card className="special-large-card">
                <Card.Img
                className="img1"
                style={{ height: "600px" }}
                variant="img-overlay"
                src="https://img.freepik.com/free-photo/beautiful-dress-hanging_23-2148105886.jpg?w=996&t=st=1696517937~exp=1696518537~hmac=20a7ff7b421e392e714be653d9756161e8dc94ceee8e049b9ddd0f6063ff64c8"
                />
                <Card.Link href="#" className="content text-black">
                <Card.ImgOverlay>
                    <h2>Casual basics and trendy key pieces</h2>
                    <p>$19.99-$48.99</p>
                    <Button variant="primary" className="btn text-uppercase"
                    onClick={(e)=>e.preventDefault()}>
                    Buy All
                    </Button>
                </Card.ImgOverlay>
                </Card.Link>
            </Card>
            </Col>
        </Row><hr />
    </Container>
  )
}

export default Special