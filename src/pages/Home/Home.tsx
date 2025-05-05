import classNames from 'classnames'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductItem from 'src/component/ProductItem'
import RelatedProduct from 'src/component/RelatedProduct'
import path from 'src/constants/path'
import useSearchParam from 'src/hooks/useSearchParam'
import { itemCategorySelector, topReviewProductSelector, topSaleProduct } from 'src/store/product.selector'
import { getCategory, getTopReviewProduct, getTopSaleProduct } from 'src/store/product.slice'
import { useAppDispatch } from 'src/store/store'
import { IProduct } from 'src/types'
import shipping from '../../assets/icons/shipping.svg'
import refund from '../../assets/icons/refund.svg'
import support from '../../assets/icons/support.svg'
import nike from '../../assets/icons/Nike_logo.svg'
import figma from '../../assets/icons/figma-logo.svg'
import kronos from '../../assets/icons/kronos.svg'
import TopReviewProduct from 'src/component/TopreviewProduct'

export default function Home() {
  const dispatch = useAppDispatch()
  const topReviewItems = useSelector(topReviewProductSelector)
  const categories = useSelector(itemCategorySelector)
  const topSales = useSelector(topSaleProduct)

  const { category } = useSearchParam()

  useEffect(() => {
    dispatch(getCategory())
    dispatch(getTopSaleProduct())
  }, [dispatch])

  useEffect(() => {
    dispatch(getTopReviewProduct(category))
  }, [dispatch, category])

  return (
    <div className='container mt-[64px]'>
      <div className='px-[40px] md:px-[60px] lg:px-[80px] flex justify-center'>
        {topSales.map((item) => (
          <TopReviewProduct key={item.id} product={item} />
        ))}
      </div>

      <div className='px-[40px] md:px-[60px] lg:px-[80px] '>
        <div className='flex flex-col gap-[23px] items-center'>
          <div className='text-[35px] font-semibold'>Best Seller</div>
          <div className='text-[22px] w-[627px] flex justify-between'>
            <Link
              to={{
                pathname: path.home,
                search: new URLSearchParams({ category: '' }).toString()
              }}
              className={classNames('cursor-pointer hover:text-primary transition-all duration-100 border-b-2', {
                'text-primary border-b-primary': !category,
                'border-b-transparent': !!category
              })}
            >
              All
            </Link>
            {categories.length &&
              categories.map((item) => (
                <Link
                  key={item.category}
                  to={{
                    pathname: path.home,
                    search: new URLSearchParams({ category: item.category }).toString()
                  }}
                  className={classNames('cursor-pointer hover:text-primary transition-all duration-100 border-b-2', {
                    'text-primary border-b-primary': category === item.category,
                    'border-b-transparent': category !== item.category
                  })}
                >
                  {item.category}
                </Link>
              ))}
          </div>
          {topReviewItems.length && (
            <div className='grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {topReviewItems.map((product: IProduct) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          )}
          <div className='text-blue-300 text-[20px] font-medium border-blue-300 border-b-[3px]'>LOAD MORE</div>
        </div>
      </div>

      <div className='mt-[91px] bg-primary h-[600px] flex pl-[110px] items-center '>
        <div className='flex flex-col text-white max-w-[570px]'>
          <div className='text-[55px] font-medium'>Adidas Men Running Sneakers</div>
          <div className='mt-[23px] text-[24px]'>Performance and design. Taken right to the edge.</div>
          <Link
            to={path.product}
            className='mt-3 text-[20px] font-semibold border-b-white border-b-[3px] cursor-pointer w-fit'
          >
            SHOP NOW
          </Link>
        </div>

        <div className=''>
          <img src='' alt='' />
        </div>
      </div>

      <div className='mt-[97.2px] px-[40px] flex flex-col items-center justify-between gap-[30px] flex-wrap md:px-[60px] md:flex-row lg:px-[80px] xl:px-[190px] '>
        <div className='max-w-[190px] flex flex-col items-center'>
          <div className='w-[100px] h-[66px]'>
            <img src={shipping} alt='' />
          </div>
          <div className='mt-[35px] text-[27px] font-medium'>FREE SHIPPING</div>
          <div className='mt-1 text-center text-[18px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        </div>

        <div className='max-w-[190px] flex flex-col items-center'>
          <div className='w-[69px] h-[78px]'>
            <img src={refund} alt='' />
          </div>
          <div className='mt-[35px] text-[27px] font-medium'>100% REFUND</div>
          <div className='mt-1 text-center text-[18px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        </div>

        <div className='max-w-[190px] flex flex-col items-center'>
          <div className='w-[68px] h-[89px]'>
            <img src={support} alt='' />
          </div>
          <div className='mt-[35px] text-[27px] font-medium'>SUPPORT 24/7</div>
          <div className='mt-1 text-center text-[18px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        </div>
      </div>

      <div className='mt-[120px] text-center text-[34px] font-semibold'>LATEST NEWS</div>
      <div className='mt-[72px] px-[40px] flex flex-col items-center justify-between gap-[30px] flex-wrap md:px-[60px] md:flex-row lg:px-[80px] xl:px-[140px]'>
        <div className='flex gap-[10px]'>
          <div className='w-[144px] h-[52px] mt-[33px]'>
            <img src={nike} alt='' />
          </div>
          <div className='max-w-[197px]'>
            <div className='text-gray-200 text-[18px] font-medium'>01 Jan, 2015</div>
            <div className='text-[22px] font-semibold'>Fashion Industry</div>
            <div className='text-[18px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
          </div>
        </div>

        <div className='flex gap-[10px]'>
          <div className='w-[116px] h-[87px] mt-[33px]'>
            <img src={figma} alt='' />
          </div>
          <div className='max-w-[197px]'>
            <div className='text-gray-200 text-[18px] font-medium'>01 Jan, 2015</div>
            <div className='text-[22px] font-semibold'>Best Design Tools</div>
            <div className='text-[18px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
          </div>
        </div>

        <div className='flex gap-[10px]'>
          <div className='w-[153px] h-[82px] mt-[33px]'>
            <img src={kronos} alt='' />
          </div>
          <div className='max-w-[197px]'>
            <div className='text-gray-200 text-[18px] font-medium'>01 Jan, 2015</div>
            <div className='text-[22px] font-semibold'>HR Community</div>
            <div className='text-[18px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[110px] text-[35px] font-semibold text-center'>FEATURED PRODUCTS</div>
      <div className='mt-[72px] px-[40px] flex flex-col items-center justify-between gap-[30px] flex-wrap md:px-[60px] md:flex-row lg:px-[80px] md:justify-start xl:px-[140px]'>
        {topReviewItems.slice(0, 3).map((item: IProduct) => (
          <RelatedProduct key={item.id} product={item} />
        ))}
      </div>
      <div className='mt-[100px] flex justify-center h-[64px]'>
        <div className='border-blue-100 border-t-[2px] border-b-[2px] border-l-[2px] rounded-l-[2px] rounded-bl-[2px] px-[21px] w-[208px] flex items-center md:w-[308px] lg:w-[408px] xl:w-[508px]'>
          <input type='text' placeholder='Search query...' className='text-gray-300 text-[18px] outline-none' />
        </div>
        <div className='w-[67px] flex justify-center items-center text-white text-[14px] font-semibold bg-primary rounded-r-[2px] rounded-br-[2px] md:w-[87px] md:text-[20px] lg:w-[107px] xl:w-[127px]'>
          Search
        </div>
      </div>
    </div>
  )
}
