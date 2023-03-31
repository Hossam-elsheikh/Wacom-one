import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Block3.module.css'
import  data  from './data'
import Section from './Section'

const Block3 = () => {
    const [activeSec,setActiveSec] = useState('Collaboard')
  return (
    <div className={classes.container}>
<div className={classes.txt}>

        <h2>Great bundled apps for education</h2> 
        <p>Gain 3 months complimentary access to great bundled apps specially tailored for education. The apps enable teachers and students to collaborate and share ideas just as easily as in the classroom.</p>
</div>
    <div className={classes.content}>
    <hr />
    <ul className={classes.list}>
        {data.map(e => <li className={e.title === activeSec && classes.active} onClick={()=> setActiveSec(e.title)}><Link >{e.title}</Link></li>)}
    </ul>
    <hr />
    {data.filter(e => e.title === activeSec).map(e=> {
        return <Section title={e.title} img={e.img} link={e.link} logo={e.logo} txt={e.txt} />
    })}
    </div>
    </div>
  )
}

export default Block3