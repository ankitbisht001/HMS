'use client'
import React, {useState} from 'react'
import style from './Web.module.css'
import About from './About'
import NavBtn from './NavBtn'
import Accomodation from './Accomodation'
import Awards from './Awards'
import Feedbacks from './Feedbacks'

const Description = () => {
  const[SelectedComponent, setSelectedComponent] = useState('About');
  const renderComponent =() => {
    switch(SelectedComponent){
      case'About':
      return <About />;
      case'Awards':
      return <Awards />;
      case'Accomodation':
      return <Accomodation />;
      case'Feedbacks':
      return <Feedbacks />;
      default:
        return <Feedbacks />
    }
  }
  return (<>
  <div id="About" className={style.desPage}>
    <div className={style.desNav} >
      <NavBtn  setSelectedComponent={setSelectedComponent} />
    </div>
    <div className={style.desContent} >
      {renderComponent()}
    </div>
  </div>
  </>
  )
}

export default Description

