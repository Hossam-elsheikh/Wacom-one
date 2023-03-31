import React, { useState } from 'react'
import contact from '../assets/contact.jpg'
import classes from './Contact.module.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    fname:'',
    email:'',
    msg:''
  })
  const submitHandler=(event)=>{
    event.preventDefault()
    setFormData({
      fname:'',
      email:'',
      msg:''
    })
  }
  return (
    <div className={classes.cont}>
      <img src={contact} alt="contact"/>
      <form onSubmit={submitHandler} target='_blanck' action='http://localhost:3000/contact'>
        <h1>Contact us</h1>
        <input value={formData.fname} required type='text' placeholder='Full name' onChange={(e)=>setFormData({...formData,fname: e.target.value})}/>
        <input value={formData.email} required type='email' placeholder='Email address' onChange={(e)=>setFormData({...formData,email: e.target.value})}/>
        <textarea value={formData.msg} required rows='10' placeholder='Your message' onChange={(e)=>setFormData({...formData,msg: e.target.value})}></textarea>
        <div className={classes.btn}>
          <p>Customer Service +202143453</p>
          <button type='submit'>Send</button>
        </div>
      </form>
    </div>
  )
}

export default Contact