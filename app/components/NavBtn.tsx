'use client'
import React from 'react'
import style from "./Web.module.css"


interface NavBtnProps {
  setSelectedComponent: (component: string) => void;
}

const NavBtn = ({ setSelectedComponent }: NavBtnProps) => {

  return (
    <>
      <button className={style.desItem} onClick={() => setSelectedComponent('About')} >Gallery</button>
      <button className={style.desItem}onClick={() => setSelectedComponent('Accomodation')} >Accomodation</button>
      <button className={style.desItem}  onClick={() => setSelectedComponent('Awards')}>Awards</button>
      <button className={style.desItem} onClick={() => setSelectedComponent('Feedbacks')} >Feedbacks</button>
    </>
  )
}

export default NavBtn
