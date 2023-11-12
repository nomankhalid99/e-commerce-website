import React, { useEffect, useState } from "react";
import {Navbar,Nav,Container,Form,FormControl,Dropdown, Button,} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({cart,totalQuantity}) => {
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setNavbarBackground("black");
      } else {
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(()=>{
    localStorage.setItem('myCart', JSON.stringify(cart))
  },[cart])

  useEffect(() => {
    localStorage.setItem('totalQuantity', totalQuantity.toString());
  }, [totalQuantity]);



  return (
    <Navbar
      bg={navbarBackground}
      expand="lg"
      data-bs-theme="dark"  
      className={`fixed-top fs-5 transparent-navbar navbar`}
      style={{ transition: "all 0.5s ease" }}
    >
      <Container fluid>
        <Navbar.Brand href="/" className="ms-3  fw-bold brand">
        <span style={{color:'rgb(210, 88, 88)'}}>My</span> Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto m-2">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="#" className="nav-link">
              Products
            </Link>
            <Dropdown className="nav-item">
              <Dropdown.Toggle as={CustomToggle} id="products-dropdown">
                Pages
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact us
                </Link>
              </Dropdown.Menu>
            </Dropdown>
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
          </Nav>
          <div className="d-flex ms-auto form">
            <Form inline>
            <div className="input-group">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 fs-5 input"
                aria-label="Search"
                aria-describedby="search-icon"
              /> 
              <Link><Button className="btn d-flex" type="submit"><FontAwesomeIcon icon={faSearch} /></Button></Link>
              <Link to="./cart" className="d-flex" id="cart-btn">
                <FontAwesomeIcon icon={faCartShopping} />
                  <span>{totalQuantity}</span>
              </Link>
              </div>
            </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="#"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="nav-link"
  >
    {children}
  </a>
));

export default Navigation;
