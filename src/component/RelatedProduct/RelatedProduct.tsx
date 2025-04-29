import { IProduct } from 'src/types'
import { formatCurrency } from '../FormatCurrency/FormatCurrency'
import RateProduct from '../RateProduct'

interface Props {
  product: IProduct
}

export default function RelatedProduct({ product }: Props) {
  return (
    <div className='flex gap-[25px]'>
      <div className='w-[154px] h-[154px]'>
        <img src={product.image1} alt='' />
      </div>
      <div className='flex flex-col gap-4 max-w-[200px]'>
        <div className='text-[22px] line-clamp-2'>{product.name}</div>
        <RateProduct key={product.id} rate={product.rate} />
        <div className='flex items-center gap-[5px]'>
          <div className='text-red-200'>{formatCurrency(product.price)}</div>
          <div className='text-[20px] text-gray-200 line-through'>{formatCurrency(product.price)}</div>
        </div>
      </div>
    </div>
  )
}
