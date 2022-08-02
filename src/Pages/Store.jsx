import React from 'react'
import ListProducts from '../Components/ListProducts'
import Navbar from '../Components/Navbar'

const Store = () => {
  return (
    <div>
        <div style={{
            backgroundColor: 'black'
        }}>
            <Navbar/>
        </div>
        <h1>Your Product</h1>
        <div>
            <button>Add Product</button>
        </div>
        <div>
            <ListProducts/>
        </div>
    </div>
  )
}

export default Store