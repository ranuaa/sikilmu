import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getListProduk, deleteProduct, DETAIL_PRODUK, detailProduct } from '../../action/produkAction';
import ListItem from '../ListItem';
import axios from 'axios'
import AddProduct from '../AddProduk';
import { Button } from 'bootstrap';
import EditProduk from '../EditProduk';


const ListProducts = () => {


    const { getListProdukResult, getListProdukError, getListProdukLoading, deleteProdukResult } = useSelector((state) => state.ProdukReducer)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getListProduk());
    }, [dispatch])


    useEffect(() => {
        if (deleteProdukResult) {
            dispatch(getListProduk())

        }
    }, [deleteProdukResult, dispatch])



    return (
        <div>
            <ListItem />
            {getListProdukResult ? (
                getListProdukResult.map((produk) => {
                    return (
                        <>
                            <ListItem produk={produk} key={produk.id} />
                                <div className='bawah'>
                                <button className='delete'
                                    onClick={() => dispatch(deleteProduct(produk.id))}
                                >Delete</button>
                                <button className='edit'
                                    onClick={() => dispatch(detailProduct(produk))}
                                >Get Info</button>
                        
                                </div>

                        </>
                    )
                })
            ) : getListProdukLoading ? (<p>Loading...</p>
            ) : <p>{getListProdukError ? getListProdukError : 'data Kosong'}</p>}

        </div>
    )
}

export default ListProducts