import React from 'react'
import Cards from '../Components/Cards'
import Navbar from '../Components/Navbar'
import '../Style/Product.css'

const Product = () => {
  return (
    <div>
      <div style={{ background: 'black' }}>
        <Navbar />
      </div>
      <h1>Products</h1>
      <div className="container-fluid bg-trasparent my-4 p-3" style={{
        position: 'relative'
      }}>
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
          <Cards />
          <Cards />
          <Cards />

        </div>
      </div>



    </div>
  )
}

export default Product