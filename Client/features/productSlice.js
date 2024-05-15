import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: ['test'],
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

export const {setFetchProducts} = productSlice.actions;
export default productSlice.reducer