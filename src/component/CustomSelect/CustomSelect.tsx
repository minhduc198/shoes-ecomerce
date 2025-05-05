import React from 'react'
import { IOptionSortBy } from 'src/types'

interface Props extends React.OptionHTMLAttributes<HTMLOptionElement> {
  className?: string
  options: IOptionSortBy[]
  optionClassName?: string
  onChangeOption?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  value: string
}
export default function CustomSelect({
  options,
  className,
  optionClassName = 'h-[38px] w-fit px-[15px] bg-gray-400 border-[2px] border-gray-75 rounded-[2px] outline-none',
  onChangeOption,
  value,
  ...rest
}: Props) {
  return (
    <select className={optionClassName} value={value} onChange={onChangeOption}>
      {options?.map((option) => (
        <option key={option.key} value={option.key} className={className} {...rest}>
          {option.value}
        </option>
      ))}
    </select>
  )
}
