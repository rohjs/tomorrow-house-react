import React, { ChangeEvent } from 'react'

import { useAppDispatch, useAppSelector } from 'src/hooks'
import { getFirstOptions } from 'src/app/product/detail'
import { addCheckout } from 'src/app/product/checkout'
import { useFormControls } from './useFormControls'

import { Select } from 'src/components'

interface OneDepthControlProps {
  id: string
}

export const OneDepthControl: React.FC<OneDepthControlProps> = ({ id }) => {
  const dispatch = useAppDispatch()
  const firstOptions = useAppSelector(getFirstOptions)
  const selectId = `one-depth-control-${id}`

  const { getOptionId } = useFormControls()

  const updateItem = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget
    const optionId = getOptionId(value)
    dispatch(addCheckout(optionId))
    e.currentTarget.selectedIndex = 0
  }

  return (
    <Select
      id={selectId}
      placeholder={firstOptions.placeholder}
      options={firstOptions.options}
      required
      onChange={updateItem}
    />
  )
}
