import useQueryConfig from 'src/hooks/useQueryConfig'
import useSearchProducts from 'src/hooks/useSearchProducts'

interface Props {
  totalItems: number
  siblingNumber?: number
}

export default function Pagination({ siblingNumber = 2, totalItems }: Props) {
  const queryConfig = useQueryConfig()
  const onSearchProducts = useSearchProducts()

  const currentSelectPage = queryConfig._page ?? 1
  const siblingLeft = Number(currentSelectPage) - siblingNumber
  const siblingRight = Number(currentSelectPage) + siblingNumber

  const limitProductPerPage = queryConfig._limit ?? '9'
  const totalPage = Math.ceil(totalItems / +limitProductPerPage)

  const handleCurrentPage = (page: number) => {
    onSearchProducts({ _page: `${page}` })
  }

  const handlePagination = (page: number) => {
    if (page <= 2 || page >= totalPage - 1 || (siblingLeft <= page && page <= siblingRight)) {
      return (
        <div
          key={page}
          className={`h-full px-[25px] cursor-pointer py-4 ${currentSelectPage == page ? 'text-white bg-primary' : ''} `}
          onClick={() => handleCurrentPage(page)}
        >
          {page}
        </div>
      )
    }

    return (
      <div
        key={page}
        className={`px-[25px] py-4 ${siblingLeft - 1 === page || siblingRight + 1 === page ? 'block' : 'hidden'}`}
      >
        ...
      </div>
    )
  }

  return (
    <div className='h-14 bg-gray-75 w-full rounded-[2px] flex justify-center'>
      <div className='flex'>
        {Array(totalPage)
          .fill(0)
          .map((_, pos) => handlePagination(pos + 1))}
      </div>
    </div>
  )
}
