import React from 'react'
import '../Style/Category.css'

const Category = () => {
    return (
        <section>
            <div className='categories__heading'>
                <h1>
                    <h1>Categories</h1>
                </h1>
            </div>

            <div className='categories__left'
            >
                <h1>SNEAKERS</h1>
            </div>
            <div className='categories__right'
            >
                <h1>BOOTS</h1>
            </div>
            <div className='categories__left'
            >
                <h1>SPORTS</h1>
            </div>
            <div className='categories__right'
            >
                <h1>HEELS</h1>
            </div>
        </section>
    )
}

export default Category