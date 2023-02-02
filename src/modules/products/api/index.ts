import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IProduct } from 'modules/products/types'

export const productApi = createApi({
  reducerPath: 'product/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com'
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    getProductsByCategory: build.query<IProduct[], string>({
      query: (category) => ({
        url: `/products/category/${category}`,      
      })
    }),
    getCategories: build.query<string[], void>({
      query: () => ({
        url: '/products/categories'
      })
    }),  
  })
});

export const { useGetProductsByCategoryQuery, useGetCategoriesQuery} = productApi;