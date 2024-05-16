import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/productSlice'
import orderReducer from '../features/orderSlice'
import productDetailReducer from '../features/productDetailSlice'
export const store = configureStore({
  reducer: {
    product: productReducer,
    order: orderReducer,
    productDetail: productDetailReducer
  },
})