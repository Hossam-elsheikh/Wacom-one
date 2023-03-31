import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import MainNav from './Nav/MainNav'

const Main = () => {
  return (
    <div style={{ display: 'flex', flexDirection:'column',justifyContent:'space-around'}}>
        <MainNav />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main