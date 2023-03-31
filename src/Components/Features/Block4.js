import React from 'react'
import classes from './Block4.module.css'
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import s4 from '../assets/s4.jpg'
import s5 from '../assets/s5.jpg'
import s6 from '../assets/s6.jpg'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const data =[
    {img: s1, title:'Display Size', par: '13.3 inch'},
    {img: s2, title:'Resolution', par: '1920 x 1080 pixels'},
    {img: s3, title:'Battery-free pen', par: 'No recharging'},
    {img: s4, title:'Tilt recognition', par: 'Natural tilt support'},
    {img: s5, title:'Ergonomics', par: '19 degrees using built-in, fold-out legs'},
    {img: s6, title:'Compatibility', par: 'Windows, Android™, Mac'},
]
const Block4 = () => {
  return (
    <div  className={classes.cont}>
        <h2>Specifications</h2>
        <div className={classes.specs}>
            {data.map(s=> {
                return(
                    <AnimationOnScroll animateIn='fadein' animateOnce='true'>
                    <div className={classes.spec}>
                        <img src={s.img} alt={s.title} />
                        <h3>{s.title}</h3>
                        <p>{s.par}</p>
                    </div>
                    </AnimationOnScroll>
                )
            })}
        </div>
    </div>
  )
}

export default Block4