import React from 'react'
import Image from 'next/image'
import { Standard, Premium, Medium } from './Images'
import style from "./Web.module.css"

const Accomodation = () => {
  return (<>
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" >
        <Image src={Medium} alt='medium rooms' className={style.imageResizer}  />
      <div className={`carousel-caption d-none d-md-block ${style.textPainter}`}>
        <h3>Executive Rooms</h3>
        <p>Enjoy refined style and premium amenities.</p>
      </div>
    </div>
    <div className="carousel-item">
        <Image src={Standard} alt='standard rooms' className={style.imageResizer}  />
      <div className={`carousel-caption d-none d-md-block ${style.textPainter}`}>
        <h3>Standard Rooms</h3>
        <p>Relax with essential comfort and value.</p>
      </div>
    </div>
    <div className="carousel-item">
      <Image src={Premium} alt='premium rooms' className={style.imageResizer} />
      <div className={`carousel-caption d-none d-md-block ${style.textPainter}`}>
        <h3>Luxury Rooms</h3>
        <p>Indulge in unmatched elegance and comfort.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </>
  )
}

export default Accomodation