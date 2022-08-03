import { GET_LIST_PRODUK, ADD_PRODUK } from "../../action/produkAction";

const initialState = {
    //list
    getListProdukResult : false,
    getListProdukLoading: false,
    getListProdukError: false,
    //add
    addProdukResult : false,
    addProdukLoading: false,
    addProdukError: false
}

const produk = ( state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_PRODUK:
            return {
                ...state,
                getListProdukResult : action.payload.data,
                getListProdukLoading: action.payload.loading,
                getListProdukError: action.payload.errorMessage
            };
        case ADD_PRODUK:
            return {
                ...state,
                addProdukResult : action.payload.data,
                addProdukLoading: action.payload.loading,
                addProdukError: action.payload.errorMessage
            }

        default:
            return state;
    }
}

export default produk;