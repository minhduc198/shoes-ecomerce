import React from 'react'
import { IProduct } from 'src/types'
import RateProduct from '../RateProduct'

interface Props {
  product: IProduct
}

export default function ProductItem({ product }: Props) {
  return (
    <div className='flex flex-col w-full'>
      <div className='h-[273px] rounded-[5px]'>
        <img src={product.image1} alt='' />
      </div>
      <div className='flex flex-col items-center pt-[10px] pb-5 px-5 border-b-[3px] border-l-[3px] border-r-[3px] border'>
        <div className='text-blue-dark-blue text-[18px] font-bold leading-[1.5] line-clamp-1'>{product.name}</div>
        <div className=''>
          <RateProduct key={product.id} rate={product.rate} />
        </div>
        <div className='flex items-center'>
          <div className='text-[18px] font-bold leading-[1.8] text-primary'>{product.price}</div>
          <div className='text-gray-100 text-[14px] leading-[1.5] line-through ml-[13px]'>{product.price}</div>
          <div className='text-red-100 font-bold text-[14px] leading-[1.5] ml-2'>{product.sale_off}</div>
        </div>
      </div>
    </div>
  )
}
