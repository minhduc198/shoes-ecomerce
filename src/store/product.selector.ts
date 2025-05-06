import { RootState } from "./store";

export const productSelector = (state: RootState) =>  state.product.products
export const totalItemsSelector = (state: RootState) =>  state.product.totalItems
export const productDetailSelector = (state: RootState) => state.product.productDetail
export const topReviewProductSelector = (state: RootState) => state.product.topReviewProducts
export const itemCategorySelector = (state: RootState) => state.product.itemCategories
export const relatedProductSelector = (state: RootState) => state.product.relatedProduct
export const topSaleProduct = (state: RootState) => state.product.topSaleProduct
