import React from 'react'
import '../Style/Product.css'
import StarsRating from 'stars-rating'
import { Link, useParams } from 'react-router-dom'

const Cards = ({ namapenjual, namaProduk, harga,gambarProduk, id}) => {





  return (
    <div className="col hp">
    <div className="card h-100 shadow-sm">
      <span href="#">
        <img src={gambarProduk} className="card-img-top" alt="product.title" />
      </span>

      <div className="label-top shadow-sm">
        <span className="text-white" >{namapenjual}</span>
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
          <Link to={`/detail/${id}`} >
          <button className="btn btn-warning bold-btn">add to cart</button>
          </Link>
        </div>
        <div className="clearfix mb-1">
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cards