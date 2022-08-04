import { GET_LIST_PRODUK, ADD_PRODUK, DELETE_PRODUK, DETAIL_PRODUK, UPDATE_PRODUK } from "../../action/produkAction";

const initialState = {
    //list
    getListProdukResult : false,
    getListProdukLoading: false,
    getListProdukError: false,
    //Delete
    deleteProdukResult : false,
    deleteProdukLoading: false,
    deleteProdukError: false,

    addProdukResult : false,
    addProdukLoading: false,
    addProdukError: false,
    
    updateProdukResult : false,
    updateProdukLoading: false,
    updateProdukError: false,

    detailProdukResult: false
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
            };
            case DELETE_PRODUK:
            return {
                ...state,
                deleteProdukResult : action.payload.data,
                deleteProdukLoading: action.payload.loading,
                deleteProdukError: action.payload.errorMessage
            };
            case DETAIL_PRODUK:
                return {
                    ...state,
                    detailProdukResult: action.payload.data
                };
                case UPDATE_PRODUK:
            return {
                ...state,
                updateProdukResult : action.payload.data,
                updateProdukLoading: action.payload.loading,
                updateProdukError: action.payload.errorMessage
            };
       default:
            return state;
    }
}

export default produk;