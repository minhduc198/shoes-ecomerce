import { createSearchParams, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import useQueryConfig from './useQueryConfig'
import { QueryConfigParams } from 'src/types'
import omitBy from 'lodash/omitBy'

export default function useSearchProducts() {
  const queryConfig = useQueryConfig()
  const navigate = useNavigate()

  const onSearchProducts = (value: { [key in keyof QueryConfigParams]: string }) => {
    navigate({
      pathname: path.product,
      search: createSearchParams(
        omitBy({ ...queryConfig, ...value, _page: value._page ? value._page : queryConfig._page ? '1' : '' }, (i) => !i)
      ).toString()
    })
  }

  return onSearchProducts
}
