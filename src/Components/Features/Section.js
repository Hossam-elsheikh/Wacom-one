import React from 'react'
import classes from './Block3.module.css'
const Section = ({img,logo,title,txt,link}) => {
  return (
    <div className={classes.sec}>
            <div className={classes.details}>
                <img src={logo} alt={title}/>
                <h2>{title}</h2>
                <p>{txt}</p>
                {link && <a href={link} target='_blank' rel='noreferrer'>Watch Video</a>}
            </div>
            <img src={img} className={classes.img} alt={title}/>

        </div>
  )
}

export default Section