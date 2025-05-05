import { createSearchParams, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import useQueryConfig from './useQueryConfig'
import { QueryConfigParams } from 'src/types'

export default function useSearchProducts() {
  const queryConfig = useQueryConfig()
  const navigate = useNavigate()

  const onSearchProducts = (value: { [key in keyof QueryConfigParams]: string }) => {
    navigate({
      pathname: path.home,
      search: createSearchParams({ ...queryConfig, ...value }).toString()
    })
  }

  return onSearchProducts
}
