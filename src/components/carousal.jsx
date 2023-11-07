import React from 'react'
import { Carousel } from 'react-bootstrap'

const Carousal = () => {
  return (
    <Carousel className='carousal overflow-hidden'>
        <Carousel.Item>
            <img
                className='d-block'
                src='https://img.freepik.com/free-photo/portrait-beautiful-young-woman-holding-eyeglasses-hand-standing-against-concrete-backdrop_23-2148130270.jpg?w=1060&t=st=1695651425~exp=1695652025~hmac=aa7b9bbc202aa7bae18254103c19e747198f58d93877fb6f38995bf78b4c8059'
                alt='First slide'
            />
            <Carousel.Caption className='caption'>
                <p>Don't Miss</p>
                <h1>Mysterous Deals</h1>
                <p>Online Only</p>
                <a href="#" onClick={(e)=>e.preventDefault()} className="btn btn-danger text-uppercase mt-5">Order Now</a>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className='d-block'
                src='https://img.freepik.com/free-photo/young-woman-model-blue-winter-jacket_1303-20124.jpg?t=st=1697466345~exp=1697466945~hmac=43345054d2e1faacfed7b1bcf4b66c89d0613435b8cc3392d215029012be4c5a'
                alt='Second slide'
            />
            <Carousel.Caption className='caption'>
                <p>Limited time Only</p>
                <h1>Treat your self</h1>
                <p>Upto 50% off</p>
                <a href="#" onClick={(e)=>e.preventDefault()} className="btn btn-danger text-uppercase mt-5">Shop Now</a>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default Carousal