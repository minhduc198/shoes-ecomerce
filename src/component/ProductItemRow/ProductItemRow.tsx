import React from 'react'
import { IProduct } from 'src/types'
import RateProduct from '../RateProduct'
import { formatCurrency } from 'src/utils'

interface Props {
  product: IProduct
}
export default function ProductItemRow({ product }: Props) {
  return (
    <div className='flex gap-4 pb-[42px] border-b-[2px] border-gray-400'>
      <div className='w-[300px] h-[272px] rounded-[5px] flex-shrink-0'>
        <img src={product.image1} alt='' />
      </div>
      <div>
        <div className='font-semibold text-[24px]'>{product.name}</div>
        <div className='flex gap-[15px] items-center mt-[14px]'>
          <RateProduct rate={product.rate} />
          <div className='text-[14px] text-gray-200'>{product.review} reviews</div>
          <div className='text-[14px] cursor-pointer text-blue-300'>Submit a review</div>
        </div>
        <div className='mt-[17px] w-[470xp] h-[2px] bg-gray-400'></div>
        <div className='mt-[14px] flex items-center gap-2'>
          <div className='text-[20px] font-bold text-primary '>{formatCurrency(product.price)}</div>
          <div className='text-[14px] text-gray-100 line-through'>{formatCurrency(product.price)}</div>
          <div className='text-[14px] font-bold text-red-100'>{product.sale_off}% Off</div>
        </div>
        <div className='mt-[25px] text-[14px] line-clamp-3 '>{product.comment}</div>
        {/* <div className='mt-[52px] flex gap-4 h-[46px]'>
          <div className='w-[150x] flex items-center justify-center bg-blue-50 text-blue-300 text-opacity-10'>
            Add To Cart
          </div>
          <div className='w-[46px] flex justify-center items-center'></div>
        </div> */}
      </div>
    </div>
  )
}
