import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../src/utils/axios';

const initialState = {
  list: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setFetchProducts: (state, {payload}) => {
            state.list = payload;
        }
    }
})

const {setFetchProducts} = productSlice.actions;

export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const {data} = await axiosInstance({
                method: 'get',
                url: '/products',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            dispatch(setFetchProducts(data))
        } catch (error) {
            console.log(error)
        }

    }
}

// export const addToCart = () => {
//     return async (dispatch) => {
//         const {data} = await axiosInstance({
//             method: 'POST'
//         })
//     }
// }
export default productSlice.reducer