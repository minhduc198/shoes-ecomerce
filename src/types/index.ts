export interface IProduct {
  id: number
  name: string
  rate: number
  review: number
  price: number
  sale_off: number
  category: string
  colors: string[]
  sizes: string[]
  quantity: number
  image1: string
  image2: string
  image3: string
  image4: string
  image5: string
  info: string
  comment: string
}

export interface ICategory {
  category: string
  count: number
}

export interface IOptionSortBy {
  value: string
  key: string
}

export interface QueryConfig {
  price_min: string
  price_max: string
  searchColor: string
  size: string
  name: string
  category: string 
  sort_by: string
  _limit: string
  is_row: string
  _page: string
}

export interface IProductListResponse {
  data: IProduct[]
  totalItems: number
}

export type QueryConfigParams = Partial<QueryConfig>
