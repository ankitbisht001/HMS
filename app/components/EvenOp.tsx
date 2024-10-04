import React from 'react'
import style from './Web.module.css'
import Image from 'next/image'
import {Thirdbday, ThirdwedHall, Thirdeven} from './Images'

const EvenOp = () => {
  return (<>
  <div className={style.EvenOpWrapper}>
    <div className={style.evenBox}>
    <div className={style.evenText} >
      <h3 className={style.evenHeadline}>Birthday Party</h3>
      <p className={style.evenPara}>Celebrate your special day in style! Our hotel offers a unique birthday space with personalized decor, delicious catering options, and exceptional service. Create unforgettable memories with loved ones. Enjoy a customized party experience tailored to your wishes. Book now and make your birthday unforgettable!</p>
    </div>
    <div className={style.evenImg} > <Image src={Thirdbday} alt='Birthday space' className={`${style.imageResizer} ${style.imageHover} `} /> </div>
    </div>
    <div className={style.evenBox}>
    <div className={style.evenImg} ><Image src={ThirdwedHall} alt='wedding space' className={`${style.imageResizer} ${style.imageHover} `}/></div>
    <div className={style.evenText} >
    <h3 className={style.evenHeadline}>Wedding Paradise</h3>
    <p className={style.evenPara}>Say I do in elegance! Our hotels wedding space offers a romantic ambiance, exquisite catering, and exceptional service. Customize your special day with personalized decor and tailored packages. Create lifelong memories with loved ones in our sophisticated setting. Book now and make your wedding dreams come true!</p>
    </div>
    </div>
    <div className={style.evenBox}>
    <div className={style.evenText} >
    <h3 className={style.evenHeadline}>Event Venue</h3>
    <p className={style.evenPara}>Gather with us! Our versatile event space is perfect for any occasion. From corporate meetings to social gatherings, anniversary parties to reunions, we have got you covered. Enjoy customizable decor, delicious catering, and exceptional service. Let us help you create unforgettable memories. Book now for your next event!</p>
    </div>
    <div className={style.evenImg} ><Image src={Thirdeven} alt='space for other events' className={`${style.imageResizer} ${style.imageHover} `}/></div>
    </div>
  </div>
  </>
  )
}

export default EvenOp