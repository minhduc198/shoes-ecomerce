/* eslint-disable @typescript-eslint/no-explicit-any */


// export const getListProduct = createAsyncThunk('product/getListProduct', async (params: QueryConfigParams) => {
//   const response = await http.get('products', {
//     params
//   })
//   return response.data
// })

// export const getProductDetail = createAsyncThunk('product/getProductDetail', async (id: number) => {
//   const response = await http.get(`products/${id}`)
//   return response.data
// })

// export const getTopReviewProduct = createAsyncThunk('product/getTopReviewProduct', async (category: string) => {
//   const response = await http.get(`top-reviewed-products?category=${category ?? ''}`)
//   return response.data
// })

// export const getTopSaleProduct = createAsyncThunk('product/getTopSaleProduct', async () => {
//   const response = await http.get('top-sale-products')
//   return response.data
// })

// export const getCategory = createAsyncThunk('products/getCategory', async () => {
//   const response = await http.get('category-count')
//   return response.data
// })
// export const getRelatedProduct = createAsyncThunk('product/getRelatedProduct', async (id: string) => {
//   const response = await http.get(`related-products/${id}`)
//   return response.data
// })

// export const productSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {},

//   extraReducers: (builder) => {
//     builder.addCase(getListProduct.fulfilled, (state, action) => {
//       state.products = action.payload.data
//       state.isLoading = false
//       state.totalItems = action.payload.totalItems
//     })
//     .addCase(getListProduct.pending, (state) => {
//       state.isLoading = true
//     })
//     .addCase(getListProduct.rejected, (state) => {
//       state.products = []
//       state.isLoading = false
//       state.totalItems = 0
//     })

//     builder.addCase(getProductDetail.fulfilled, (state, action) => {
//       state.productDetail = action.payload
//       state.isLoading = false
//     })
//     .addCase(getProductDetail.pending, (state) => {
//       state.isLoading = true
//     })
//     .addCase(getProductDetail.rejected, (state) => {
//       state.isLoading = false
//     })

//     builder.addCase(getTopReviewProduct.fulfilled, (state, action) => {
//       state.topReviewProducts = action.payload
//     })

//     builder.addCase(getCategory.fulfilled, (state, action) => {
//       state.itemCategories = action.payload
//     })

//     builder.addCase(getRelatedProduct.fulfilled, (state, action) => {
//       state.relatedProduct = action.payload
//     })

//     builder.addCase(getTopSaleProduct.fulfilled, (state, action) => {
//       state.topSaleProduct = action.payload
//     })
//   }
// })

// const productReducer = productSlice.reducer
// export default productReducer
