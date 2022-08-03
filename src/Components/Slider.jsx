import React from 'react'
import '../Style/Slider.css'
import Carousel from 'react-bootstrap/Carousel';
import StarsRating from 'stars-rating'
import { useDispatch, useSelector } from 'react-redux'
import { getListProduk } from '../action/produkAction'
import { useEffect } from 'react'




const Slider = () => {


  const { getListProdukResult, getListProdukError, getListProdukLoading } = useSelector((state) => state.ProdukReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProduk())
  }, [dispatch])

  return (


    <Carousel className='karosel'>


      {getListProdukResult ? (
        getListProdukResult.map((produk) => {
          return (
            <Carousel.Item className='karosel__item h-100'>
              <img
                className="d-block w-100 h-100 karosel__bungkus "
                src={produk.gambarProduk}
                alt="First slide"
              />
              <Carousel.Caption className='karosel__caption'>
                <div className='karosel__caption__toko'>
                  <img src='https://picsum.photos/200/300' alt=""
                    className='karosel__bungkus__gambar__toko'
                  />
                  <h5>{produk.namapenjual}</h5>
                  <StarsRating
                    value={4}
                    count={5}
                    size={24}
                    color2={'#ffd700'}
                    edit={false}
                  />
                </div>
                <h5 className='karosel__judul' >{produk.namaProduk}</h5>
                <h6 className='karosel__harga'>Rp.{produk.harga}</h6>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      ) : getListProdukLoading ? (<p>Loading...</p>
      ) : <p>{getListProdukError ? getListProdukError : 'data Kosong'}</p>}



    </Carousel>
  )
}

export default Slider