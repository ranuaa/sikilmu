import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, getListProduk } from '../../action/produkAction';
import { encode } from 'base-64';

const AddProduct = () => {


    const [storeName, setStoreName] = useState('');
    const [product, setProduct] = useState('');
    const [qty, setQty] = useState(0);
    const [image, setImage] = useState('');
    const { addProdukResult } = useSelector((state) => state.ProdukReducer);
    
    

    const dispatch = useDispatch();

    const handleSubmit= (e) => {
        e.preventDefault();
        dispatch(addProduct({
            store_name: storeName,
            product: product,
            qty: qty,
            image:image,
        }))

    }

    useEffect(() => {
        if(addProdukResult) {
            dispatch(getListProduk())
            setStoreName('');
            setImage('');
            setQty('');
            setProduct('');
        }
    },[addProdukResult, dispatch])


    const handleConvert= (e) => {

       console.log(e.target.files[0])
    }


  return (
    <div>
        <h4>
            add Product
        </h4>

        <form onSubmit={(e) => handleSubmit(e)} >
            <input type="text" name='storeName' placeholder='Nama Penjual' value={storeName} onChange={(e) => setStoreName(e.target.value)} />
            <input type="text" name='product' placeholder='Nama Produk' value={product} onChange={(e) => setProduct(e.target.value)} />
            <input type="number" name='qty' placeholder='Quantiy Produk' value={qty} onChange={(e) => setQty(e.target.value)} />
            <input type="file" name='image' placeholder='Foto Produk'  onChange={handleConvert} />
            <button type='submit'>Add Product</button>
        </form>
        
    </div>
  )
}

export default AddProduct