import React from 'react'
import bestSeller from '../../assets/images/bestSeller.png'
import fullStar from '../../assets/icons/full_star.svg'
import emptyStar from '../../assets/icons/empty_star.svg'

export default function BestSeller() {
  const handleStar = (star: number) => {
    return Array(5)
      .fill(0)
      .map((_, idx) => {
        return idx + 1 <= star ? <img key={idx} src={fullStar} /> : <img key={idx} src={emptyStar} />
      })
  }

  return (
    <div className='w-[301px] h-[389px] border-[3px] border-white-100 rounded-[5px] flex flex-col items-center'>
      <div className='h-[279.12px]'>
        <img src={bestSeller} alt='' />
      </div>
      <div className='mt-[14.77px] text-neutral text-[18px] font-bold tracking-[0.5px] leading-[150%]'>
        Nike Air Max 270 React
      </div>
      <div className='flex gap-[13.5px]'>{handleStar(4)}</div>
      <div className='mt-[6px]'></div>
      <div className=' mt-[6px] flex items-center'>
        <div className='text-primary font-bold text-[18px] tracking-[0.5px] leading-[180%]'>$299,43</div>
        <div className='ml-[13px] text-gray-100 line-through text-[14px] tracking-[0.5px] leading-[150%]'>$534,33</div>
        <div className='ml-2 text-[14px] text-red tracking-[0.5px] leading-[150%] font-bold'>24% Off</div>
      </div>
    </div>
  )
}
