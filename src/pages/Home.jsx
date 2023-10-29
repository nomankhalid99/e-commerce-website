import React from 'react'
import ProductList from '../components/ProductList';
import Carousal from '../components/carousal';
import Banner from '../components/banner';
import Offers from '../components/Offers';
import ScrollTopButton from '../components/ScrollTopButton';
import Special from '../components/Special';
import NewArrivals from '../components/NewArrivals';

const Home = ({cart, setCart,}) => {
  console.log(cart)

  return (
    <>    
     <Carousal/>
        <Offers/>
     <ProductList cart={cart} setCart={setCart} />
        <Banner/>
      <Special cart={cart} setCart={setCart}  />
      <NewArrivals cart={cart} setCart={setCart} />
      <ScrollTopButton/>
    </>
   
  )
}

export default Home