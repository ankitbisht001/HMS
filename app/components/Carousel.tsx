import React from 'react'
import style from "./Web.module.css"

const Carousel = () => {
  return (<>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className={`carousel-inner ${style.carouselResizer}`}>
    <div className="carousel-item active">
      <img src="https://wallpapercave.com/wp/wp1846066.jpg" className={`${style.carousel} d-block w-100`} alt="Photo Gallery" />
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256_640.jpg" className={`${style.carousel} d-block w-100`} alt="Photo Gallery" />
    </div>
    <div className="carousel-item">
    <img src="https://images5.alphacoders.com/349/349822.jpg" className={`${style.carousel} d-block w-100`} alt="Photo Gallery" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </>
  )
}

export default Carousel