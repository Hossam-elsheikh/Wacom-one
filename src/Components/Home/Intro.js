import React from 'react'
import classes from './Intro.module.css'
import one from '../assets/one.png'
const Intro = () => {
  return (
    <div className={classes.intro}>
        <div className={classes.text}>
        <div>
            <h1>One</h1>
            <p>A World of new possibilities</p>
        </div>
        <h2><span>Live.</span> <span>Dare.</span>  <span>Create.</span></h2>
        </div>
        <img src={one} alt='sdf'/>
    </div>
  )
}

export default Intro