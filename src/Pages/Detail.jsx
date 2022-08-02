import React from 'react'
import StarsRating from 'stars-rating'
import Navbar from '../Components/Navbar'
import '../Style/Detail.css'


const Detail = () => {
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
                        <img src="http://co0kie.github.io/codepen/nike-product-page/nikeShoe.png" alt="" className="product-pic" />
                    </div>

                    <div className="product-details">
                        <header>
                            <h1 className="title">Nike Roshe Run</h1>
                            <span className="colorCat">Nike</span>
                            <div className="price">
                                <span className="current">Rp.144.999</span>
                            </div>
                            <div className="rate">

                            </div>
                        </header>
                        <article>
                            <h5>Description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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