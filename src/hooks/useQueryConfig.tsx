import omitBy from 'lodash/omitBy'
import { QueryConfigParams } from 'src/types'
import useSearchParam from './useSearchParam'

export default function useQueryConfig() {
  const searchParams = useSearchParam()

  const queryConfig: QueryConfigParams = omitBy(
    {
      price_min: searchParams.price_min,
      price_max: searchParams.price_max,
      color: searchParams.color,
      size: searchParams.size,
      name: searchParams.name,
      category: searchParams.category,
      sort_by: searchParams.sort_by,
      _limit: searchParams._limit,
      is_row: searchParams.is_row,
      _page: searchParams._page
    },
    (item) => !item
  )

  return queryConfig
}
