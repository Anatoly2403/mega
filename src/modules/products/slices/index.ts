import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { ICart, IUpdateCartPayload } from '../types'

const initialState: ICart = {
  totalPrice: 0,
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart: (store, {payload}: PayloadAction<IUpdateCartPayload>) => {
      store.products = [...store.products, payload.productId];
      store.totalPrice = store.totalPrice + payload.price;
    } 
  },
});

export const { updateCart } = cartSlice.actions;
