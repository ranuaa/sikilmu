import React from 'react'
import '../Style/Slider.css'
import Carousel from 'react-bootstrap/Carousel';
import StarsRating from 'stars-rating'

const Slider = () => {
  return (
    <Carousel className='karosel'>
      <Carousel.Item className='karosel__item h-100'>
        <img
          className="d-block w-100 h-100 karosel__bungkus "
          src="https://i.ibb.co/CvTj7hb/revolt-164-6w-VEHf-I-unsplash.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='karosel__caption'>
          <div className='karosel__caption__toko'>
            <img src='https://picsum.photos/200/300' alt=""
              className='karosel__bungkus__gambar__toko'
            />
            <h5>Converse Official Store</h5>
            <StarsRating
              value={4}
              count={5}
              size={24}
              color2={'#ffd700'} 
              edit= {false}
              />
          </div>
          <h5 className='karosel__judul' >Nike Running Shoes w675</h5>
          <h6 className='karosel__harga'>Rp.999.999</h6>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider