import React, { useState } from 'react'
import HotProduct from 'src/components/HotProduct'
import shoes from '../../assets/images/shoes-img.png'
import shipping from '../../assets/icons/shipping.svg'
import refund from '../../assets/icons/refund.svg'
import support from '../../assets/icons/support.svg'
import nike from '../../assets/icons/Nike_logo.svg'
import figma from '../../assets/icons/figma-logo.svg'
import kronos from '../../assets/icons/kronos-logo.svg'
import BestSeller from 'src/components/BestSeller'
import FeaturedProduct from 'src/components/FeaturedProduct'

export default function Home() {
  const [tab, setTab] = useState('All')

  const handleChangeTab = (tab: string) => {
    setTab(tab)
  }

  return (
    <div className='container p-0'>
      <div className='bg-hero-img h-[653.73px] pt-[258px] mb-[330px] bg-no-repeat bg-cover'>
        <div className='text-white tracking-[0.5px] text-[64px] leading-[150%] font-bold ml-[104px]'>
          Super Flash Sale <br /> 50% Off
        </div>
        <div className=' flex mt-[110px] pl-[104px] pr-[142px]'>
          <HotProduct />
          <HotProduct />
          <HotProduct />
        </div>
      </div>

      <div className='pl-[83px] pr-[83px] flex flex-col items-center'>
        <div className='text-[35px] font-semibold'>BEST SELLER</div>
        <div className='mt-[26px] flex justify-between w-[627px] text-[22px]'>
          <p
            className={`cursor-pointer ${tab === 'All' && 'text-primary border-primary border-b-[3px]'}`}
            onClick={() => handleChangeTab('All')}
          >
            All
          </p>
          <p
            className={`cursor-pointer ${tab === 'Bags' && 'text-primary border-primary border-b-[3px]'}`}
            onClick={() => handleChangeTab('Bags')}
          >
            Bags
          </p>
          <p
            className={`cursor-pointer ${tab === 'Sneakers' && 'text-primary border-primary border-b-[3px]'}`}
            onClick={() => handleChangeTab('Sneakers')}
          >
            Sneakers
          </p>
          <p
            className={`cursor-pointer ${tab === 'Belt' && 'text-primary border-primary border-b-[3px]'}`}
            onClick={() => handleChangeTab('Belt')}
          >
            Belt
          </p>
          <p
            className={`cursor-pointer ${tab === 'Sunglasses' && 'text-primary border-primary border-b-[3px]'}`}
            onClick={() => handleChangeTab('Sunglasses')}
          >
            Sunglasses
          </p>
        </div>
        <div className='mt-[23.5px] flex flex-wrap gap-9'>
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
        </div>
      </div>

      <div className='bg-primary h-[600px] mt-[190px] pl-[105px] flex items-center'>
        <div className='text-white'>
          <div className='font-medium text-[55px] max-w-[571px]'>Adidas Men Running Sneakers</div>
          <div className='text-[24px]mt-[23px]'>Performance and design. Taken right to the edge.</div>
          <div className='mt-[12px] pb-1 border-b-[3px] border-white w-fit cursor-pointer font-semibold text-[20px]'>
            SHOP NOW
          </div>
        </div>

        <div className='mt-[-190px]'>
          <img src={shoes} alt='' />
        </div>
      </div>

      <div className='container mt-[97px] flex flex-col  gap-y-8 flex-wrap sm:flex-row md:px-[80px] xl:pl-[191.36px] xl:pr-[217.42px]'>
        <div className='flex flex-col items-center'>
          <div>
            <img src={shipping} alt='' />
          </div>
          <div className='text-[27px] font-medium mt-[54px]'>FREE SHIPPING</div>
          <div className='mt-1 max-w-[197px] text-center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <div>
            <img src={refund} alt='' />
          </div>
          <div className='text-[27px] font-medium mt-[54px]'>100% REFUND</div>
          <div className='mt-1 max-w-[197px] text-center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <div>
            <img src={support} alt='' />
          </div>
          <div className='text-[27px] font-medium mt-[54px]'>SUPPORT 24/7</div>
          <div className='mt-1 max-w-[197px] text-center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        </div>
      </div>

      <div className=' container mt-[80px] md:px-[80px] lg:mt-[121px] xl:pl-[141px] xl:pr-[146px] '>
        <p className='text-[28px] text-center font-semibold md:text-[34px]'>LATEST NEWS</p>
        <div className='mt-[50px] flex flex-col items-center gap-y-10 justify-between sm:flex-row sm:flex-wrap  lg:mt-[72px]'>
          <div className='flex'>
            <div className='mt-[36px] w-[108px] flex-shrink-0 lg:w-[128px]'>
              <img src={nike} alt='' />
            </div>
            <div className='ml-[35px]'>
              <div className='font-medium text-[18px] text-gray-25'>01 Jan, 2015</div>
              <div className='mt-[2px] text-[20px] font-semibold lg:text-[22px]'>Fashion Industry</div>
              <div className='text-[16px] max-w-[180px] lg:max-w-[197.56px] lg:text-[18px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
            </div>
          </div>

          <div className='flex'>
            <div className='mt-[36px] w-[108px] flex-shrink-0 lg:w-[128px]'>
              <img src={figma} alt='' />
            </div>
            <div className='ml-[35px] lg:ml-[11px]'>
              <div className='font-medium text-[18px] text-gray-25'>01 Jan, 2015</div>
              <div className='mt-[2px] text-[20px] font-semibold lg:text-[22px]'>Best Design Tools</div>
              <div className='text-[16px] max-w-[180px] lg:max-w-[197.56px] lg:text-[18px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
            </div>
          </div>

          <div className='flex'>
            <div className='mt-[36px] w-[108px] flex-shrink-0 lg:w-[128px]'>
              <img src={kronos} alt='' />
            </div>
            <div className='ml-[35px]'>
              <div className='font-medium text-[18px] text-gray-25'>01 Jan, 2015</div>
              <div className='mt-[2px] text-[20px] font-semibold lg:text-[22px]'>HR Community</div>
              <div className='text-[16px] max-w-[180px] lg:max-w-[197.56px] lg:text-[18px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-[110px] md:px-[80px] xl:pl-[141px] xl:pr-[146px]'>
        <div className='font-semibold text-center text-[30px] sm:text-[35px] '>FEATURED PRODUCTS</div>
        <div className='mt-10 gap-y-6 flex flex-col items-center justify-between sm:flex-row sm:flex-wrap  xl:mt-[72px]'>
          <FeaturedProduct />
          <FeaturedProduct />
          <FeaturedProduct />
          {/* <FeaturedProduct />
          <FeaturedProduct />
          <FeaturedProduct /> */}
        </div>
        <div className='mt-[50px] flex justify-center h-[64px] xl:mt-[110px]'>
          <input
            className='w-[208px]  border-[2px] outline-0 border-blue pt-[23px] px-[21px] pb-[19px] sm:w-[308px] md:w-[508px]'
            placeholder='Search query...'
          />
          <div className='w-[90px] text-white bg-primary flex justify-center items-center cursor-pointer md:w-[127px]'>
            Search
          </div>
        </div>
      </div>
    </div>
  )
}
