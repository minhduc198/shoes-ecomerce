import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICategory, IProduct, IProductListResponse, QueryConfigParams } from 'src/types'

export const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getProductDetail: builder.query<IProduct, string>({
      query: (id: string) => `products/${id}`
    }),
    getListProduct: builder.query<IProductListResponse, QueryConfigParams>({
      query: (params: QueryConfigParams) => ({
        url: 'products',
        params
      }),
      providesTags: ['Post']
    }),
    getTopReviewProduct: builder.query<IProduct[], string>({
      query: (category: string) => `top-reviewed-products?category=${category}`
    }),
    getTopSaleProduct: builder.query<IProduct[], void>({
      query: () => 'top-sale-products'
    }),
    getCategory: builder.query<ICategory[], void>({
      query: () => 'category-count'
    }),
    getRelatedProduct: builder.query<IProduct[], string>({
      query: (id: string) => `related-products/${id}`
    })
  })
})

export const {
  useGetTopReviewProductQuery,
  useGetCategoryQuery,
  useGetRelatedProductQuery,
  useGetTopSaleProductQuery,
  useGetListProductQuery
} = productApi
