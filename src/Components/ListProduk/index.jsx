import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getListProduk } from '../../action/produkAction';

const ListProducts = () => {
    const { getListProdukResult, getListProdukError, getListProdukLoading } = useSelector((state) => state.ProdukReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListProduk())
    }, [dispatch])

    return (
        <div>
            <h4>List Products</h4>
            {getListProdukResult ? (
                getListProdukResult.map((produk) => {
                    return (
                        <div key={produk.id}>
                            <h1>Store : {produk.namapenjual}</h1>
                            <h1>Produk : {produk.namaProduk}</h1>
                            <h1>QTY : {produk.qty}</h1>
                            <img src={produk.gambarProduk} alt="" />
                        </div>
                    )
                })
            ) : getListProdukLoading ? (<p>Loading...</p>
            ) : <p>{getListProdukError ? getListProdukError : 'data Kosong'}</p>}
        </div>
    )
}

export default ListProducts