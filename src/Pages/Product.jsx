import React from 'react'
import Cards from '../Components/Cards'
import Navbar from '../Components/Navbar'
import '../Style/Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { getListProduk } from '../action/produkAction'
import { useEffect } from 'react'



const Product = () => {

  const { getListProdukResult, getListProdukError, getListProdukLoading } = useSelector((state) => state.ProdukReducer) 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProduk())
}, [dispatch])



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

        {getListProdukResult ? (
                getListProdukResult.map((produk) => {
                    return <Cards
                    key={produk.id}
                    namapenjual={produk.namapenjual}
                    namaProduk={produk.namaProduk}
                    harga={produk.harga}
                    qty={produk.qty}
                    deskripsi={produk.deskripsi}
                    gambarProduk={produk.gambarProduk}
                    id={produk.id}
                    />
                })
            ) : getListProdukLoading ? (<p>Loading...</p>
            ) : <p>{getListProdukError ? getListProdukError : 'data Kosong'}</p>}
        </div>
      </div>



    </div>
  )
}

export default Product