import React from 'react'
import classes from './Block2.module.css'
import f1 from '../assets/types.jpg'
import f2 from '../assets/pens.jpg'
import f3 from '../assets/compatibility.png'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Block2 = () => {
  return (
    <div className={classes.cont2}>
        <h2>The full Wacom One picture</h2>
        <div className={classes.fs}>
        <AnimationOnScroll animateIn='fadein'  animateOnce='true'>
            <div className={classes.f}>
                <img src={f1} alt='types'/>
                <h2>Software at the ready</h2>
                <p>Brilliant applications are waiting to be explored. The included Bamboo Paper* app for example transforms your creative pen display into a sketchpad.</p>
                <a href='http://bonus.wacom.com/' target='_blanck'>Discover all included software</a>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='fadein' animateOnce='true'>
            <div className={classes.f + ' ' + classes.special}>
                <img src={f2} alt='types'/>
                <h2>Pick your pen</h2>
                <p>You’re bound to love the included Wacom One pen. But a pen is a very personal thing. Several top brands have made pens that are compatible with Wacom One, so you’re sure to find the right pen option for you.</p>
                <a href='https://www.wacom.com/en-us/comp' target='_blanck'>List of compatible pens</a>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='fadein'  animateOnce='true'>
            <div className={classes.f}>
                <img src={f3} alt='types'/>
                <h2>Connect your way</h2>
                <p>Brilliant applications are waiting to be explored. The included Bamboo Paper* app for example transforms your creative pen display into a sketchpad.</p>
                <a href='https://www.wacom.com/en-us/comp' target='_blanck'>List of compatible Chromebook 
and Android devices</a>
            </div>
            </AnimationOnScroll>
        </div>
    </div>
  )
}

export default Block2