import React from 'react'
import Image from 'next/image'
import {Gym, Beds, EvenHall, Pool} from './Images'
import style from "./Web.module.css"
const About = () => {
  return (
    <> 
      <link href="https://https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds-photos%2Fno-copyright-picture&psig=AOvVaw1P_MfMuGu7mGbbpQs6oLLx&ust=1728069578345000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKi09fz28ogDFQAAAAAdAAAAABAE.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"></link>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src={Gym} className={`d-block w-100 ${style.imageResizer}`} alt="Gym" />
    </div>
    <div className="carousel-item">
      <Image src={Beds} className={`d-block w-100 ${style.imageResizer}`} alt="Beds" />
    </div>
    <div className="carousel-item">
      <Image src={EvenHall} className={`d-block w-100 ${style.imageResizer}`} alt="Eventhall" />
    </div>
    <div className="carousel-item">
      <Image src={Pool} className={`d-block w-100 ${style.imageResizer}`} alt="Pool" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default About