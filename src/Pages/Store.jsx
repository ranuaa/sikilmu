import React from 'react'
import { AddProduct, ListProducts } from '../Components'
import Navbar from '../Components/Navbar'

const Store = () => {
  return (
    <div>
        <h1>ListProducts</h1>
        <AddProduct/>
        <hr />
        <ListProducts/>
    </div>
  )
}

export default Store