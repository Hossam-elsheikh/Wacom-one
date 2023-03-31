import React from 'react'
import HomeFeatures from './HomeFeatures'
import Intro from './Intro'
import ProductCarousel from './ProductCarousel'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Home = () => {
  return (
    <div>
    <Intro/>
    <hr/>
    <HomeFeatures/>
    <hr />
    <ProductCarousel/>
    </div>
  )
}

export default Home