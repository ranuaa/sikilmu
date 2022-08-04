import React from 'react'
import { AddProduct, ListProducts } from '../Components'
import Navbar from '../Components/Navbar'

const Store = () => {
  const kondisi = "add"
  return (
    <div 
    style={{
      background: 'linear-gradient(90deg, hsla(0, 0%, 0%, 1) 0%, hsla(11, 80%, 57%, 1) 100%)',
    }}
    >
        <div
        style={{
          backgroundColor: 'black'
        }}
        >
          <Navbar/>
        </div>
        <h1
        style={{
          color: 'white'
        }}
        >List Products</h1>
        <AddProduct />
        <hr />
        <ListProducts/>
    </div>
  )
}

export default Store