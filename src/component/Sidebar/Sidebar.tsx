/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames'
import { useRef, useState } from 'react'
import useQueryConfig from 'src/hooks/useQueryConfig'
import useSearchParam from 'src/hooks/useSearchParam'
import useSearchProducts from 'src/hooks/useSearchProducts'
import { useGetCategoryQuery } from 'src/store/product.api'
import { ICategory } from 'src/types'
import InputNumber from '../InputNumber'

const colors = ['#006CFF', '#FC3E39', '#171717', '#FFF600', '#FF00B4', '#EFDFDF']

export default function Sidebar() {
  const onSearchProducts = useSearchProducts()
  const queryConfig = useQueryConfig()

  const { data: items } = useGetCategoryQuery()

  const priceRef = useRef<HTMLInputElement>(null)

  const [prices, setPrices] = useState({
    priceMin: '',
    priceMax: ''
  })

  const [isErrorPrice, setIsErrorPrice] = useState(false)

  const regexNumber = /^\s*(?:\d+|\.\d+|\d+\.\d+)\s*$/

  const searchParams = useSearchParam()

  const handleOnChange = (type: 'priceMin' | 'priceMax') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (regexNumber.test(value) || value === '') {
      setPrices((prev) => ({
        ...prev,
        [type]: value
      }))
    }
    setIsErrorPrice(false)
  }

  const handleSubmit = () => {
    const { priceMin, priceMax } = prices

    if ((priceMin && priceMax && Number(priceMin) > Number(priceMax)) || (!priceMin && !priceMax)) {
      setIsErrorPrice(true)
      priceRef.current?.focus()
    } else {
      setIsErrorPrice(false)
      onSearchProducts({ price_max: priceMax, price_min: priceMin })
    }
  }

  const handleCategory = (item: ICategory) => {
    onSearchProducts({
      category: queryConfig.category && item.category === queryConfig.category ? '' : item.category
    })
  }

  const handleColor = (color: string) => {
    const colorChange = color.replace('#', '')

    onSearchProducts({
      searchColor: queryConfig.searchColor && colorChange === queryConfig.searchColor ? '' : colorChange
    })
  }

  return (
    <div className='w-[270px] flex flex-col gap-y-[30px]'>
      <div className='bg-gray-400 px-4 py-4'>
        <div className='text-[18x] font-medium'>Hot Deals</div>
        <div className='flex flex-col mt-[25px] gap-[18px]'>
          {items?.map((item) => {
            return (
              <div
                key={item.category}
                onClick={() => handleCategory(item)}
                className={`flex justify-between items-center text-[18px] cursor-pointer hover:text-primary transition-all duration-200 ${searchParams.category === item.category ? 'text-primary' : ''}`}
              >
                <div>{item.category}</div>
                <div>{item.count}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='bg-gray-400 px-4 py-4'>
        <div className='text-[18x] font-medium'>PRICES</div>
        <div className='mt-[25px] flex gap-2 mb-4'>
          <InputNumber
            placeholder='Enter min'
            value={prices.priceMin}
            onChange={handleOnChange('priceMin')}
            errorClassname='hidden'
            ref={priceRef}
          />
          <InputNumber
            placeholder='Enter max'
            value={prices.priceMax}
            onChange={handleOnChange('priceMax')}
            errorMessage={isErrorPrice ? 'Vui lòng điền khoảng giá phù hợp' : ''}
          />
        </div>
        <button onClick={handleSubmit} className='mt-3 bg-primary text-white w-full py-2'>
          Search Price
        </button>
      </div>
      <div className='bg-gray-400 px-4 py-4'>
        <div className='font-medium text-[18px]'>Colors</div>
        <div className='mt-5 flex gap-[17px]'>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                borderColor: searchParams.searchColor === color.replace('#', '') ? color + '50' : 'transparent'
              }}
              className='w-[26px] h-[26px] bg-transparent rounded-full relative top-0 left-0 border-[2px] border-transparent'
            >
              <div
                onClick={() => handleColor(color)}
                style={{ backgroundColor: color }}
                className={classNames(
                  `w-4 h-4 rounded-full cursor-pointer absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`
                )}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
