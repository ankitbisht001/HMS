import React from 'react'
import style from './Web.module.css'
import Image from 'next/image'
import { Wifi, Parking, Clock, Breakfast, Laundry, Iron } from './Images'

const Amenities = () => {
  return (<><div className={style.thirdWrapper}>
    <h1 className={style.thirdHead}>Our Amenity Services</h1>
<div className={style.amenityBox}>
        <div className={style.amenity}>
            <Image src={Wifi} alt='wifi' className={style.amenityIcon} />
            <h4 className={style.amenityHead}>Free WiFi</h4>
            <p className={style.amenityText}>We provide free hi-speed WiFi services to all our guests during their stay.</p>
        </div>
        <div className={style.amenity}>
            <Image src={Clock} alt='wifi' className={style.amenityIcon} />
            <h4 className={style.amenityHead}>Free WiFi</h4>
            <p className={style.amenityText}>We provide free hi-speed WiFi services to all our guests during their stay.</p>
        </div>
        <div className={style.amenity}>
            <Image src={Parking} alt='wifi' className={style.amenityIcon} />
            <h4 className={style.amenityHead}>Free WiFi</h4>
            <p className={style.amenityText}>We provide free hi-speed WiFi services to all our guests during their stay.</p>
        </div>
        <div className={style.amenity}>
            <Image src={Breakfast} alt='wifi' className={style.amenityIcon} />
            <h4 className={style.amenityHead}>Free WiFi</h4>
            <p className={style.amenityText}>We provide free hi-speed WiFi services to all our guests during their stay.</p>
        </div>
        <div className={style.amenity}>
            <Image src={Laundry} alt='wifi' className={style.amenityIcon} />
            <h4 className={style.amenityHead}>Free WiFi</h4>
            <p className={style.amenityText}>We provide free hi-speed WiFi services to all our guests during their stay.</p>
        </div>
        <div className={style.amenity}>
            <Image src={Iron} alt='wifi' className={style.amenityIcon} />
            <h4 className={style.amenityHead}>Free WiFi</h4>
            <p className={style.amenityText}>We provide free hi-speed WiFi services to all our guests during their stay.</p>
        </div>
    </div>
  </div>
  </>
  )
}

export default Amenities