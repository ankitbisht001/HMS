'use client'
import React from 'react'
import style from "./Web.module.css"
const Nav = () => {
  return (<>
    <nav className={`navbar navbar-expand-lg ${style.navItems}`}>
  <div className="container-fluid" style={{paddingInline:"10vh"}}>
    <ul className={`${style.navColorFixer} navbar-nav `}>
        <a className="nav-link" href="#carouselExampleIndicators">Home</a>
        <a className="nav-link" href="/">Features</a>
      <span className="navbar-logo" style={{fontSize:"30px"}}>aHotel</span>
        <a className="nav-link" href="/">Pricing</a>
        <a className="nav-link" href="#About">About</a>
    </ul>
  </div>
</nav>
 
  </>
  )
}

export default Nav