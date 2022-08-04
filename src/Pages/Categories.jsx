import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Cards from '../Components/Cards';


const Categories = () => {

    const [produk, setProduk] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getCategory();
    })

    const getCategory = async() => {
        const response = await axios.get(`http://localhost:3500/products?q=${id}`)
        setProduk(response.data)
    }
  return (
    <div>
    </div>
  )
}

export default Categories