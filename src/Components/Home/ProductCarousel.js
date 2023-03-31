import React from 'react'
import slide1 from '../assets/wacomslide1.png'
import slide2 from '../assets/wacomslide2.png'
import slide3 from '../assets/wacomslide3.png'
import classes from './Carousel.module.css'
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Carousel } from 'primereact/carousel';
        
const ProductCarousel = () => {
    const images = [
        {url: slide1},
        {url: slide2},
        {url: slide3},
        {url: slide1},
        {url: slide2},
        {url: slide3},
        {url: slide1},
        {url: slide2},
        {url:slide3}
    ]
    const responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
    const temp = (img) =>{
      return <img className={classes.img} src={img.url} alt='one'/>
    }
 
  return (
    <div className={classes.cont}>
        <h2>Check it out closely</h2>
        <Carousel value={images}  autoplayInterval={3000} responsiveOption={responsiveOptions} numVisible={1} numScroll={1} itemTemplate={temp}/>
    </div>

  )
}

export default ProductCarousel