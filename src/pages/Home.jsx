import React from 'react'
import ProductList from '../components/ProductList';
import Carousal from '../components/carousal';
import Banner from '../components/banner';
import Offers from '../components/Offers';
import Special from '../components/Special';
import NewArrivals from '../components/NewArrivals';

const Home = ({cart,products, setCart,}) => {
  console.log(cart)

  return (
    <>    
     <Carousal/>
        <Offers/>
     <ProductList cart={cart} products={products} setCart={setCart} />
        <Banner/>
      <Special cart={cart} products={products} setCart={setCart}  />
      <NewArrivals cart={cart} products={products} setCart={setCart} />
    </>
   
  )
}

export default Home