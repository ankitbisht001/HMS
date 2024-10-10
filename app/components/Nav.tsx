'use client'
import React from 'react'
import style from "./Web.module.css"
const Nav = () => {
  return (<>
    <nav className={`navbar navbar-expand-lg ${style.navItems}`}>
  <div className="container-fluid" style={{paddingInline:"10vh"}}>
    <ul className={`${style.navColorFixer} navbar-nav `}>
        <a className="nav-link" href="#carouselExampleIndicators" style={{fontFamily:"New Century Schoolbook, TeX Gyre Schola, serif", fontSize:"20px"}}>Home</a>
        <a className="nav-link" href="/" style={{fontFamily:"New Century Schoolbook, TeX Gyre Schola, serif", fontSize:"20px"}}>Features</a>
      <span className="navbar-logo" style={{fontSize:"35px", fontFamily:"cursive"}}>The Hotel</span>
        <a className="nav-link" href="/" style={{fontFamily:"New Century Schoolbook, TeX Gyre Schola, serif", fontSize:"20px"}}>Pricing</a>
        <a className="nav-link" href="#About"style={{fontFamily:"New Century Schoolbook, TeX Gyre Schola, serif", fontSize:"20px"}}>About</a>
    </ul>
  </div>
</nav>
 
  </>
  )
}

export default Nav