/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef, useState } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputNumberClassName?: string
  errorClassname?: string
  errorMessage?: string
}

const InputNumber = forwardRef(function (
  {
    className = 'outline-none px-1 py-1 w-full placeholder-gray-100',
    inputNumberClassName = 'relative',
    errorClassname = 'absolute top-10 -left-16 text-red-600 text-xs',
    errorMessage = '',
    ...rest
  }: Props,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const regexNumber = /^\s*(?:\d+|\.\d+|\d+\.\d+)\s*$/
  const [localValue, setLocalValue] = useState('')
  // const inputRef = useRef<HTMLInputElement>(null)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueInput = e.target.value
    if (regexNumber.test(valueInput) || valueInput === '') {
      setLocalValue(valueInput)
    }
  }

  // Use in React 18
  // useImperativeHandle(ref, () => {
  //   return {
  //     focus() {
  //       inputRef.current?.focus()
  //     }
  //   }
  // }, [])

  return (
    <div className={inputNumberClassName}>
      <input className={className} value={localValue} onChange={handleOnChange} {...rest} ref={ref} />
      {errorMessage && <div className={errorClassname}>Please enter number</div>}
    </div>
  )
})

export default InputNumber
