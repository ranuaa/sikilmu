import axios from "axios";

export const GET_LIST_PRODUK = "GET_LIST_PRODUK";
export const ADD_PRODUK = "ADD_PRODUK";

export const getListProduk = () => {
    return(dispatch) => {
        dispatch({
            type: GET_LIST_PRODUK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'get',
            url: 'http://localhost:3500/products',
            // timeout: 12000
        })
            .then((response) => {
                dispatch({
                    type: GET_LIST_PRODUK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })

            })
            .catch((error) => {

                dispatch({
                    type: GET_LIST_PRODUK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })

            })
    }
}


//add Product

export const addProduct = (data) => {
    return(dispatch) => {
        dispatch({
            type: ADD_PRODUK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //post API
        axios({
            method: 'POST',
            url: 'http://localhost:3500/products',
            // timeout: 12000
            data: data,
        })
            .then((response) => {
                dispatch({
                    type: ADD_PRODUK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })

            })
            .catch((error) => {

                dispatch({
                    type: ADD_PRODUK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })

            })
    }
}