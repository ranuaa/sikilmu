import React from 'react'
import '../Style/Product.css'
import StarsRating from 'stars-rating'

const Cards = () => {
  return (
    <div className="col hp">
    <div className="card h-100 shadow-sm">
      <a href="#">
        <img src="https://freepngimg.com/download/shoes/55552-7-sneakers-image-free-hd-image.png" className="card-img-top" alt="product.title" />
      </a>

      <div className="label-top shadow-sm">
        <a className="text-white" href="#">Converse</a>
      </div>
      <div className="card-body">
        <div className="clearfix mb-3">
          <span className="float-start badge rounded-pill bg-success">1.245$</span>

          <span className="float-end">
          <StarsRating
              value={4}
              count={5}
              size={24}
              color2={'#ffd700'} 
              edit= {false}
              />
          </span>
        </div>
        <h4 className="card-title">
          Nike Running Soes 
        </h4>

        <div className="d-grid gap-2 my-4">

          <a href="#" className="btn btn-warning bold-btn">add to cart</a>

        </div>
        <div className="clearfix mb-1">
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cards