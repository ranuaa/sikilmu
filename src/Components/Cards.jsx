import React from 'react'
import '../Style/Product.css'
import StarsRating from 'stars-rating'

const Cards = ({ namapenjual, namaProduk, harga, qty,deskripsi,gambarProduk}) => {
  return (
    <div className="col hp">
    <div className="card h-100 shadow-sm">
      <a href="#">
        <img src={gambarProduk} className="card-img-top" alt="product.title" />
      </a>

      <div className="label-top shadow-sm">
        <a className="text-white" href="#">{namapenjual}</a>
      </div>
      <div className="card-body">
        <div className="clearfix mb-3">
          <span className="float-start badge rounded-pill bg-success">{harga}</span>

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
          {namaProduk}
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