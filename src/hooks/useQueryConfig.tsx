import omitBy from 'lodash/omitBy'
import { useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import { ProductParams } from 'src/types'
import useSearchParam from './useSearchParam'

export default function useQueryConfig() {
  const searchParams = useSearchParam()
  const navigate = useNavigate()

  const queryConfig: ProductParams = searchParams

  const setQueryConfig = (value: { [key in keyof ProductParams]: string }) => {
    const params = new URLSearchParams(omitBy({ ...queryConfig, ...value }, (item) => !item)).toString()
    navigate({
      pathname: path.product,
      search: params
    })
  }

  return {
    setQueryConfig,
    queryConfig
  }
}
