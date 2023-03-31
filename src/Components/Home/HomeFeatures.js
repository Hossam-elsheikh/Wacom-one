import React from 'react'
import drawing from '../assets/drawing.png'
import photo from '../assets/photo.png'
import visual from '../assets/visual.png'
import annotation from '../assets/annotation.png'
import classes from './HomeFeatures.module.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const data = [
    {img: drawing,
    title: 'Drawing', 
    txt: 'Sketch, draw and paint directly on screen and enjoy natural surface friction with minimal reflection. Imagine a pen that uses software to make it the tool you want it to be: paintbrush, pen, marker, pencil, chalk or eraser. The only limit is your imagination.'
},
{
    img: photo,
    title: 'Photo enhancing',
    txt: 'Impress your social media fans and followers alike. The precise Wacom One Pen and the nearly A4/Letter-sized canvas let you comfortably personalize your images or videos, boosting your editing skills in the process.'

},
{
    img: visual,
    title: 'Visual thinking',
    txt: 'With the familiar feeling of pen on paper, Wacom One lets you capture ideas, create mind-maps, draw diagrams and more, before sharing them easily with friends and colleagues.'
},
{
    img : annotation,
    title: 'Annotating',
    txt: 'The light, battery-free, ergonomically designed pen means you can tweak or sign documents and jot down notes just as you would with pen and paper.'
}
]
const HomeFeatures = () => {
  return (
    <div className={classes.features}>
        <h2>Raise your game to a new digital level</h2>
    <div className={classes.cont}>
    {data.map(e=> 
    <div className={classes.f}>
    <AnimationOnScroll animateIn='fadein' animateOnce={true}>
    <div className={classes.block}>
        <img src={e.img} alt='img'/>
        <div>
            <h2>{e.title}</h2>
            <p>{e.txt}</p>
        </div>
    </div>
    </AnimationOnScroll>
    </div>
    )}
    </div>
    </div>
  )
}

export default HomeFeatures