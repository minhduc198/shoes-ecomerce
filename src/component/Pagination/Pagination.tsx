import useQueryConfig from 'src/hooks/useQueryConfig'
import useSearchProducts from 'src/hooks/useSearchProducts'

interface Props {
  totalProduct: number
  siblingNumber?: number
}

export default function Pagination({ siblingNumber = 2, totalProduct }: Props) {
  const queryConfig = useQueryConfig()
  const onSearchProducts = useSearchProducts()

  const currentSelectPage = queryConfig._page ?? 1
  const siblingLeft = Number(currentSelectPage) - siblingNumber
  const siblingRight = Number(currentSelectPage) + siblingNumber

  const limitProductPerPage = queryConfig._limit ?? '9'
  const totalPage = Math.ceil(totalProduct / +limitProductPerPage)

  const handleCurrentPage = (page: number) => {
    onSearchProducts({ _page: `${page}` })
  }

  const handlePagination = (page: number) => {
    if (page <= 2 || page >= totalPage - 1) {
      return page
    }

    if (siblingLeft <= page && page <= siblingRight) {
      return page
    }

    return '...'
  }

  return (
    <div className='h-14 bg-gray-75 w-full rounded-[2px] flex justify-center'>
      <div className='flex'>
        {Array(totalPage)
          .fill(0)
          .map((_, pos) => (
            <div
              key={pos}
              className={`h-full px-[25px] cursor-pointer py-4 ${currentSelectPage == pos + 1 ? 'text-white bg-primary' : ''}`}
              onClick={() => handleCurrentPage(pos + 1)}
            >
              {handlePagination(pos + 1)}
            </div>
          ))}
      </div>
    </div>
  )
}
