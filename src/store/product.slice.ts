/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from './product.api'
import { ProductParams, ICategory, IProduct } from 'src/types'

interface InitialState {
  products: IProduct[]
  isLoading: boolean
  productDetail: IProduct
  topReviewProducts: IProduct[]
  itemCategories: ICategory[]
  relatedProduct: IProduct[]
  topSaleProduct: IProduct[]
}

const initialState: InitialState = {
  products: [],
  isLoading: false,
  productDetail: {} as IProduct,
  topReviewProducts: [],
  itemCategories: [],
  relatedProduct: [],
  topSaleProduct: []

}

export const getListProduct = createAsyncThunk(
  'product/getListProduct',
  async (params: ProductParams) => {
    const response = await http.get("products", {
      params
    })
    return response.data
  }
) 

export const getProductDetail = createAsyncThunk(
  'product/getProductDetail',
  async (id: number) => {
    const response = await http.get(`products/${id}`)
    return response.data
  }

)

export const getTopReviewProduct = createAsyncThunk(
  'product/getTopReviewProduct',
  async (category: string) => {
    const response = await http.get(`top-reviewed-products?category=${category ?? ''}`)
    return response.data
  }
)

export const getTopSaleProduct = createAsyncThunk(
  'product/getTopSaleProduct',
  async () => {
    const response = await http.get('top-sale-products')
    return response.data
  }
)

export const getCategory = createAsyncThunk(
  'products/getCategory',
  async () => {
    const response = await http.get('category-count')
    return response.data
  }
)
export const getRelatedProduct = createAsyncThunk(
  'product/getRelatedProduct',
   async (id: string) => {
    const response = await http.get(`related-products/${id}`)
    return response.data
   } 
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder.addCase(getListProduct.fulfilled, (state, action) => {
     state.products = action.payload
     state.isLoading = false
    })
    builder.addCase(getListProduct.pending, (state) => {
      state.isLoading = true
     })
     builder.addCase(getListProduct.rejected, (state) => {
      state.isLoading = true
     })

     builder.addCase(getProductDetail.fulfilled, (state, action) => {
      state.productDetail = action.payload
      state.isLoading = false
     })
     builder.addCase(getProductDetail.pending, (state) => {
      state.isLoading = true
     })
     builder.addCase(getProductDetail.rejected, (state) => {
      state.isLoading = false
     })

     builder.addCase(getTopReviewProduct.fulfilled , (state, action) => {
       state.topReviewProducts = action.payload
     })

     builder.addCase(getCategory.fulfilled, (state, action) => {
      state.itemCategories = action.payload
     })

     builder.addCase(getRelatedProduct.fulfilled, (state, action) => {
      state.relatedProduct = action.payload
     })

     builder.addCase(getTopSaleProduct.fulfilled, (state, action) => {
      state.topSaleProduct = action.payload
     })
  }
})


const productReducer = productSlice.reducer
export default productReducer