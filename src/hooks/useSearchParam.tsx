import { useSearchParams } from 'react-router-dom'

export default function useSearchParam() {
  const [searchParams] = useSearchParams()

  return Object.fromEntries(searchParams.entries())
}
