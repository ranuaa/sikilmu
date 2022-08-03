import React, { useEffect, useState } from 'react'
import StarsRating from 'stars-rating'
import Navbar from '../Components/Navbar'
import '../Style/Detail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Detail = () => {

    const {id} = useParams();
    const [detail, setDetail] = useState([]);



    useEffect(() => {
        getDetailProduk();
    }, [])


    const getDetailProduk = async() => {
        const response = await axios.get(`http://localhost:3500/products/${id}`)
        setDetail(response.data);
    }

  

    return (
        <div>
            <div
                style={{
                    background: 'black'
                }}
            >
                <Navbar />
            </div>

            <div className='body'>
                <div className="container">

                    <div className="product-image">
                        <img src="http://co0kie.github.io/codepen/nike-product-page/nikeLogo.png" alt="" className="product-logo" />
                        <img src={detail.gambarProduk} alt="" className="product-pic" />
                    </div>

                    <div className="product-details">
                        <header>
                            <h1 className="title">{detail.namaProduk}</h1>
                            <span className="colorCat">{detail.namapenjual}</span>
                            <div className="price">
                                <span className="current">Rp.{detail.harga}</span>
                            </div>
                            <div className="rate">

                            </div>
                        </header>
                        <article>
                            <h5>Description</h5>
                            <p>{detail.deskripsi}</p>
                        </article>


                        <form action="">
                            <div className="controls">
                                <div className="color">
                                    <h5>color</h5>
                                    <ul>
                                        <select name="" id="">
                                            <option value="">Blue</option>
                                            <option value="">White</option>
                                            <option value="">Black</option>
                                            <option value="">green</option>
                                        </select>
                                        
                                    </ul>
                                </div>
                                <div className="size">
                                    <h5>size</h5>
                                    <select name="" id="" className="option">
                                        <option value="41">41</option>
                                        <option value="42">42</option>
                                        <option value="43">43</option>
                                        <option value="44">44</option>
                                    </select>
                                </div>
                                <div className="qty">
                                    <h5>qty</h5>
                                    <select type="number" name="" id="" className="option" >

                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="footer">
                                <button type="submit">
                                    <img src="http://co0kie.github.io/codepen/nike-product-page/cart.png" alt="" />
                                    <span>add to cart</span>
                                </button>
                            </div>
                        </form>






                    </div>

                </div>
            </div>


        </div>
    )
}

export default Detail