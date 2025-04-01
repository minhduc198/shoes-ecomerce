import React from 'react'
// import itemProduct from '../../assets/images/product.png'

export default function HotProduct() {
  return (
    <div className='bg-wheat w-[408.57px] h-[358px] rounded-[5px] cursor-pointer pt-8 px-[35px] flex flex-col items-center hover:bg-wheat-100'>
      <div className='flex items-center '>
        <div className='font-bold text-[20px] leading-[150%] tracking-[0.5px] '>FS - QUILTED MAXI CROSS BAG</div>
        <div className='font-bold text-[30px] leading-[180%] text-primary tracking-[0.5px]'>$299,43</div>
      </div>
      {/* <div className=''>
        <img src={itemProduct} alt='' />
      </div> */}
      <div className='flex gap-2'>
        <div className='text-gray-100 text-[18px] leading-[150%] line-through'>$534,33</div>
        <div className='text-red text-[18px] leading-[150%] font-bold tracking-[0.5px]'>24% off</div>
      </div>
    </div>
  )
}
