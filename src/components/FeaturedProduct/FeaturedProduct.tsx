import React from 'react'
import featuredProduct from '../../assets/images/bestSeller.png'
import fullStar from '../../assets/icons/full_star.svg'
import emptyStar from '../../assets/icons/empty_star.svg'

export default function FeaturedProduct() {
  const handleStar = (star: number) => {
    return Array(5)
      .fill(0)
      .map((_, idx) => {
        return idx + 1 <= star ? <img key={idx} src={fullStar} /> : <img key={idx} src={emptyStar} />
      })
  }
  return (
    <div className='flex h-[154px] gap-[25px]'>
      <div className='w-[154px] flex-shrink-0'>
        <img src={featuredProduct} alt='' />
      </div>
      <div className='flex flex-col gap-4'>
        <div className='text-[18px] sm:max-w-[200px] sm:text-[22px]'>Blue Swade Nike Sneakers</div>
        <div className='flex gap-[5.33px]'>{handleStar(3)}</div>
        <div className='flex gap-1'>
          <div className='text-[20px] font-medium text-red'>$499</div>
          <div className='text-[20px] line-through text-gray-25'>$599</div>
        </div>
      </div>
    </div>
  )
}
