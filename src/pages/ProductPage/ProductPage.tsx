import classNames from 'classnames'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import OptionSelect from 'src/component/CustomSelect'
import Pagination from 'src/component/Pagination'
import ProductItem from 'src/component/ProductItem'
import ProductItemRow from 'src/component/ProductItemRow'
import Sidebar from 'src/component/Sidebar'
import path from 'src/constants/path'
import useQueryConfig from 'src/hooks/useQueryConfig'
import useSearchProducts from 'src/hooks/useSearchProducts'
import { productSelector, totalItemsSelector } from 'src/store/product.selector'
import { getCategory, getListProduct } from 'src/store/product.slice'
import { useAppDispatch } from 'src/store/store'
import eachItemActive from '../../assets/icons/eachItemActive.svg'
import eachItemUnActive from '../../assets/icons/eachItemUnActive.svg'
import rowItemActive from '../../assets/icons/rowItemActive.svg'
import rowItemUnActive from '../../assets/icons/rowItemUnActive.svg'

export default function ProductPage() {
  const dispatch = useAppDispatch()
  const productList = useSelector(productSelector)
  const totalItems = useSelector(totalItemsSelector)
  const queryConfig = useQueryConfig()
  const onSearchProducts = useSearchProducts()

  const isRowLayout = !!queryConfig.is_row

  const optionSortBy = [
    {
      value: 'Select',
      key: ''
    },
    {
      value: 'Name A-Z',
      key: 'name'
    },
    {
      value: 'Rate Star',
      key: 'rate'
    },
    {
      value: 'Price',
      key: 'price'
    }
  ]

  const optionShowItem = [
    {
      key: '9',
      value: '9'
    },
    {
      key: '15',
      value: '15'
    },
    {
      key: '21',
      value: '21'
    }
  ]

  useEffect(() => {
    dispatch(getListProduct(queryConfig))
  }, [dispatch, JSON.stringify(queryConfig)])

  useEffect(() => {
    dispatch(getCategory())
  }, [])

  const handleOptionSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    onSearchProducts({ sort_by: value })
  }

  const handleOptionShowItem = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pageNumber = e.target.value
    onSearchProducts({ _limit: pageNumber })
  }

  const handleShowItemType = (type: 'eachItem' | 'rowItem') => {
    if (type === 'rowItem') {
      onSearchProducts({ is_row: 'active' })
    } else {
      onSearchProducts({ is_row: undefined })
    }
  }

  return (
    <div className='container mt-[50px]'>
      <div className='px-[40px] md:px-[60px] lg:px-[80px] lg:pr-[135px] lg:pl-[104px] flex gap-[30px]'>
        <Sidebar />

        <div className='flex flex-col gap-[23px] w-[960px]'>
          <div className=' bg-primary h-[298px] flex pl-[110px] items-center'>
            <div className='flex flex-col text-white max-w-[570px]'>
              <div className='text-[30px] font-medium'>Adidas Men Running Sneakers</div>
              <div className='mt-[23px] text-[14px]'>Performance and design. Taken right to the edge.</div>
              <Link
                to={path.product}
                className='mt-3 text-[12px] font-semibold border-b-white border-b-[3px] cursor-pointer w-fit'
              >
                SHOP NOW
              </Link>
            </div>

            <div className=''>
              <img src='' alt='' />
            </div>
          </div>
          <div className='bg-gray-400 flex justify-between items-center'>
            <div className='py-[11px] pl-[22px] flex items-center'>
              <div className='mr-[47px]'>{productList.length} items</div>

              <div className='flex gap-3 items-center'>
                <div>Sort By</div>
                <OptionSelect
                  options={optionSortBy}
                  onChangeOption={handleOptionSortBy}
                  value={queryConfig.sort_by || ''}
                />
              </div>

              <div className='flex gap-3 items-center ml-14'>
                <div>Show</div>
                <OptionSelect
                  options={optionShowItem}
                  onChangeOption={handleOptionShowItem}
                  value={queryConfig._limit || '9'}
                />
              </div>
            </div>
            <div className='flex gap-[34px]'>
              <div className='cursor-pointer' onClick={() => handleShowItemType('eachItem')}>
                {isRowLayout ? <img src={eachItemUnActive} alt='' /> : <img src={eachItemActive} alt='' />}
              </div>

              <div className='pr-[18px] cursor-pointer' onClick={() => handleShowItemType('rowItem')}>
                {isRowLayout ? <img src={rowItemActive} alt='' /> : <img src={rowItemUnActive} alt='' />}
              </div>
            </div>
          </div>

          <div
            className={classNames('grid  gap-[26px]  ', {
              'grid-cols-1 h-[1300px] overflow-scroll': isRowLayout,
              'grid-cols-3': !isRowLayout
            })}
          >
            {productList.map((product) =>
              isRowLayout ? (
                <ProductItemRow key={product.id} product={product} />
              ) : (
                <ProductItem key={product.id} product={product} />
              )
            )}
          </div>

          <Pagination totalItems={totalItems} />
        </div>
      </div>
    </div>
  )
}
