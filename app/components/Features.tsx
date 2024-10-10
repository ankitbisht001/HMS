import React from 'react'
import Image from 'next/image'
import {fSpa, fGym, fPool } from './Images'
import style from './Web.module.css'

const Features = () => {
  return (<>
    <div  className={style.featureWrapper}>
      <Image src={fSpa} alt='spa' className={style.featureImage} />
      <Image src={fGym} alt='Gym' className={style.featureImage}  />
      <Image src={fPool} alt='Pool' className={style.featureImage} />
    </div>
  </>
  )
}

export default Features;