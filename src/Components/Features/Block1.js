import React from 'react'
import classes from './Block1.module.css'
import f1 from '../assets/f1.jpg'
import f2 from '../assets/f2.jpg'
import f3 from '../assets/f3.jpg'
const data = [
    {img:f1, title: 'Just like a standard pen',txt:'With no need for batteries, it’s a pen that feels and looks just right in your hand. And, it’s so accurate, what you do is what you see.' },
    {img: f2, title: 'Paper-like canvas', txt: 'With natural surface friction and minimal reflection, it feels like you’re drawing or writing on paper, not glass.'},
    {img:f3, title :'Space to play', txt: 'See your imagination come to life in full color on a display that’s nearly A4/Letter in size.'}
]
const Block1 = () => {
  return (
    <div className={classes.cont}>
        <h1>Familiarity meets freedom</h1>
        <div className={classes.fes}>
            {data.map(e=> {
                return (
                    <div className='fadein'>
                    <div className={classes.fe}>
                        <img src={e.img} alt='one'/>
                        <h3>{e.title}</h3>
                        <p>{e.txt}</p>
                    </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Block1