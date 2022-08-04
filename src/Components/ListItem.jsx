import { button } from 'bootstrap'
import React from 'react'
import '../Style/ListItem.css'





const Listitem = ({produk}) => {




  return (
    <div className='row bungkus'>
        <div className='col'>{produk ? produk.id : <p>id</p>}</div>
        <div className='col'>{produk ? produk.namapenjual :<p>Pama Penjual</p>}</div>
        <div className='col'>{ produk ? produk.namaProduk :<p>nama Produk</p>}</div>
        <div className='col'>{ produk ? <p>Rp. {produk.harga}</p> :<p>Hraga</p>}</div>
        <div className='col'>{ produk ? <p>{produk.qty} Pcs</p> :<p>Stock</p>}</div>
        <div className='col'>{ produk ? produk.deskripsi.slice(0,20) :<p>Desc</p>}</div>
        <div className='col'>{ produk ? produk.warna :<p>Warna</p>}</div>
        <div className='col'>{ produk ? produk.ukuran :<p>Size</p>}</div>
        <div className='col'>{produk ? <img src={produk.gambarProduk} alt="" /> : <p>Photo</p>}</div>
        <div className='col'>{ produk ? produk.kategori :<p>Kategori</p>}</div>
    </div>
  )
}

export default Listitem

/**
 * id: 2,
namapenjual: "Nike 2",
namaProduk: "Nike Basketball Shoes",
harga: "959.000",
qty: 20,
deskripsi: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
warna: "red",
ukuran: 44,
gambarProduk: "https://i.ibb.co/Mhn58Vw/pngfind-com-adidas-shoes-png-2100465.png",
kategori: "Sport"
 */