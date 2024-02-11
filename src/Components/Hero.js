import React from 'react'

export default function Hero() {
  return (
    <div className='hero'>
<h1 className='heroTitle'>Three Years of Social Impact !</h1>
<p className='heroInfo'>We are here with the initiatve to spread awareness about menstural health and hygiene</p>
   <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./nithya_web2-removebg-preview (1).png" className="d-block w-100" alt="Slide 1"/>
    </div>
    <div className="carousel-item"  style={{height:"500px"}}>
      <img src="./nithya_pic4.jpg" className="d-block w-100" alt="Slide 2"/>
    </div>
    <div className="carousel-item">
      <img src="./nithya_pic2.jpg" className="d-block w-100" alt="Slide 3"/>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>

  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
