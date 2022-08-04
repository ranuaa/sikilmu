import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Category.css'

const Category = () => {
    return (
        <section>
            <div className='categories__heading'>
                <h1>
                    <h1>Categories</h1>
                </h1>
            </div>
            <Link to='/category/sneakers'>
            <div className='categories__left'
            >
                <h1>SNEAKERS</h1>
            </div>
            </Link>

            <Link to='/category/boots'>
            <div className='categories__right'
            >
                <h1>BOOTS</h1>
            </div>
            </Link>
            <Link to='/category/sports'>
            <div className='categories__left'
            >
                <h1>SPORTS</h1>
            </div>
            </Link>
            <Link to='/category/heels'>
            <div className='categories__right'
            >
                <h1>HEELS</h1>
            </div>
            </Link>
        </section>
    )
}

export default Category