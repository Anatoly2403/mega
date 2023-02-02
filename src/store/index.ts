import { configureStore } from '@reduxjs/toolkit';
import { productApi } from 'modules/products/api';
import { cartSlice } from 'modules/products/slices';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;