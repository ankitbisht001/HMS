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
            <h4 className={style.amenityHead}>24 Hour Room Service</h4>
            <p className={style.amenityText}>Everything you need, is just one call away and to make your stay more relaxing we provide a 24 hour room service.</p>
        </div>
        <div className={style.amenity}>
            <Image src={Parking} alt='wifi' className={style.amenityIcon} />
            <h4 className={style.amenityHead}>Complimentary Breakfast</h4>
            <p className={style.amenityText}>Start your day with a refreshing breakfast made by our highly
                                             experienced kitchen staff with carefully picked ingredients and food that reminds you of home.</p>
        </div>
        <div className={style.amenity}>
            <Image src={Breakfast} alt='wifi' className={style.amenityIcon} />
            <h4 className={style.amenityHead}>Valet Parking</h4>
            <p className={style.amenityText}>For your convenience, we provide a parking space and a valet to pick up and drop off your car.</p>
        </div>
        <div className={style.amenity}>
            <Image src={Laundry} alt='wifi' className={style.amenityIcon} />
            <h4 className={style.amenityHead}>Laundry Service</h4>
            <p className={style.amenityText}>A holiday means you don &apos t have to worry about anything. We provide an efficient laundry service.</p>
        </div>
        <div className={style.amenity}>
            <Image src={Iron} alt='wifi' className={style.amenityIcon} />
            <h4 className={style.amenityHead}>Ironing Service</h4>
            <p className={style.amenityText}>We also provide iron services to our guests during their stay.</p>
        </div>
    </div>
  </div>
  </>
  )
}

export default Amenities