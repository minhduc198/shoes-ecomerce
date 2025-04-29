interface Props {
  rate: number
}

export default function RateProduct({ rate }: Props) {
  const calculateWidth = (index: number) => {
    if (index <= rate) return '100%'

    if (index - rate < 1) {
      return `${(rate - Math.floor(rate)) * 100}%`
    }

    return '0%'
  }

  return (
    <div className='flex gap-[5px]'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div className='relative inset-0'>
            <div className='absolute top-0 left-0 overflow-hidden' style={{ width: calculateWidth(index + 1) }}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='text-yellow-100 w-4 h-4'
              >
                <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 7.03L12 17.77l-6.18 3.4L7 14.14 2 9.27l6.91-1.01L12 2z' />
              </svg>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='text-gray-200 w-4 h-4'
            >
              <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 7.03L12 17.77l-6.18 3.4L7 14.14 2 9.27l6.91-1.01L12 2z' />
            </svg>
          </div>
        ))}
    </div>
  )
}
