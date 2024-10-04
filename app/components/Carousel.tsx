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
      <img src="https://c4.wallpaperflare.com/wallpaper/360/515/601/night-in-las-vegas-bellagio-luxury-hotel-casino-hd-wallpapers-for-mobile-phones-laptops-and-pc-1920%C3%971080-wallpaper-preview.jpg" className={`${style.carousel} d-block w-100`} alt="Photo Gallery" />
    </div>
    <div className="carousel-item">
      <img src="https://images.alphacoders.com/439/439191.jpg" className={`${style.carousel} d-block w-100`} alt="Photo Gallery" />
    </div>
    <div className="carousel-item">
    <img src="https://c4.wallpaperflare.com/wallpaper/161/978/437/home-interior-design-furniture-estate-wallpaper-preview.jpg" className={`${style.carousel} d-block w-100`} alt="Photo Gallery" />
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