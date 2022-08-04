import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, getListProduk } from '../../action/produkAction';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { encode } from 'base-64';
import '../../Style/AddProduct.css'



const EditProduk = ({kondisi}) => {


    const [namaPenjual, setNamaPenjual] = useState('');
    const [namaProduk, setNamaProduk] = useState('');
    const [harga, setHarga] = useState('');
    const [qty, setQty] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [kategori, setKategori] = useState('');
    const [gambar, setGambar] = useState('');
    const [ukuran, setUkuran] = useState(0)
    const [warna, setWarna] = useState('');
    const { addProdukResult } = useSelector((state) => state.ProdukReducer);



    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct({
            namapenjual: namaPenjual,
            namaProduk: namaProduk,
            harga: harga,
            qty: qty,
            deskripsi: deskripsi,
            warna: warna,
            ukuran: ukuran,
            gambarProduk: gambar,
            kategori: kategori
        }))

    }

    

    useEffect(() => {
        if (addProdukResult) {
            dispatch(getListProduk())
            setNamaPenjual('');
            setNamaProduk('');
            setHarga('');
            setQty('');
            setDeskripsi('')
            setWarna('')
            setUkuran('')
            setGambar('')
        }
    }, [addProdukResult, dispatch])


    // const handleConvert = (e) => {

    //     console.log(e.target.files[0])
    // }


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                {kondisi? "Add" : "Edit"}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add / Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <form onSubmit={(e) => handleSubmit(e)}  >
                        <div className='formss'>
                            <label>Nama Penjual</label>
                            <input type="text" 
                            name='namaPenjual' 
                            placeholder='Nama Penjual' 
                            value={namaPenjual} 
                            onChange={(e) => setNamaPenjual(e.target.value)}
                            />
                            <label>Nama Produk</label>
                            <input type="text" 
                             name='namaProduk' 
                             placeholder='Nama Produk' 
                             value={namaProduk} 
                             onChange={(e) => setNamaProduk(e.target.value)}
                            />
                            <label>Harga</label>
                            <input type="text" 
                             name='harga' 
                             placeholder='Harga Produk' 
                             value={harga} 
                             onChange={(e) => setHarga(e.target.value)}
                            />
                            <label>Stock Quantity</label>
                            <input type="number" 
                            name='qty' 
                            placeholder='Quantity Produk' 
                            value={qty} 
                            onChange={(e) => setQty(e.target.value)}
                            />
                            <label>Deskripsi</label>
                            <textarea 
                            name="deskripsi"
                            cols="30" 
                            rows="10"
                            placeholder='Deskripsi Produk' 
                            value={deskripsi} 
                            onChange={(e) => setDeskripsi(e.target.value)}
                            />
                            <label>Kategori</label>
                            <select 
                            name="kategori" 
                            placeholder='Kategori Produk' 
                            value={kategori} 
                            onChange={(e) => setKategori(e.target.value)}
                            >
                                <option value="Sneaker">Sneaker</option>
                                <option value="Sport">Sport</option>
                                <option value="Boots">Boots</option>
                                <option value="Heels">Heels</option>
                            </select>
                            <label>Gambar</label>
                            <input type="text" 
                             name='gambar' 
                             placeholder='Photo Produk' 
                             value={gambar} 
                             onChange={(e) => setGambar(e.target.value)}
                            />
                            <label>Ukuran / Size</label>
                            <input type="number" 
                            name='ukuran' 
                            placeholder='Ukuran / Size Produk' 
                            value={ukuran} 
                            onChange={(e) => setUkuran(e.target.value)}
                            />
                            <label>Warna</label>
                            <input type="text" 
                             name='warna' 
                             placeholder='Warna Produk' 
                             value={warna} 
                             onChange={(e) => setWarna(e.target.value)}
                            />
                        </div>
                        <button className='btn-info' type='submit'> Submit </button>
                    </form>
            


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>



        </div>
    )
}

export default EditProduk