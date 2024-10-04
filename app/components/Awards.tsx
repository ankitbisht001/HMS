import React from 'react'
import Image from 'next/image'
import { Trophy } from './Images'
import style from './Web.module.css'
const Awards = () => {
  return (<>
        <div className={style.awardsCard}>
            <div className={style.trophyRing}>
            <Image src={Trophy} alt='trophy'/>
            </div>
            <h4 className={style.awardHead}>Best Luxury Hotel</h4>
            <p>March 2018, Awarded as best Luxury Hotel in Dehradun</p>
        </div>
        <div className={style.awardsCard}>
            <div className={style.trophyRing}>
            <Image src={Trophy} alt='trophy'/>
            </div>
            <h4 className={style.awardHead}>Service Excellence</h4>
            <p>September 2015, Awarded for Service Excellence</p>
        </div>
        <div className={style.awardsCard}>
            <div className={style.trophyRing}>
            <Image src={Trophy} alt='trophy'/>
            </div>
            <h4 className={style.awardHead}>Happy Customers</h4>
            <p>june 2022, voted for best experience By Customers.</p>
        </div>
  </>
  )
}

export default Awards