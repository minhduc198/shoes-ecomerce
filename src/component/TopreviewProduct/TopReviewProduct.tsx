import { IProduct } from 'src/types'
import { formatCurrency } from 'src/utils'

interface Props {
  product: IProduct
}

export default function TopReviewProduct({ product }: Props) {
  return (
    <div className='w-[418px] py-[29px] px-[35px] flex flex-col gap-3 items-center rounded-sm bg-gray-50 shadow-sm hover:bg-gray-200 transition-all duration-200'>
      <div className='flex justify-between'>
        <div className='text-[20px] font-bold w-[178px] text-ellipsis'>{product.name}</div>
        <div className='text-[30px] font-bold text-primary'>{formatCurrency(product.price)}</div>
      </div>
      <div className='w-[150px] h-[150px]'>
        <img src={product.image1} alt='' />
      </div>
      <div className='flex items-center'>
        <div className='text-gray-100  text-[18px] line-through '>{formatCurrency(product.price)}</div>
        <div className='text-[18px] font-bold text-red-100'>{product.sale_off}% Off</div>
      </div>
    </div>
  )
}
