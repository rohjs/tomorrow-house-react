import React, { ChangeEvent } from 'react'

import { useAppDispatch, useAppSelector } from 'src/hooks'
import { getExtraOptions } from 'src/app/product/detail'
import {
  addCheckout,
  getEnableSelectingExtraOptions,
} from 'src/app/product/checkout'

import { Select } from 'src/components'

interface ExtraOptionControlProps {
  id: string
}

export const ExtraOptionControl: React.FC<ExtraOptionControlProps> = ({
  id,
}) => {
  const dispatch = useAppDispatch()
  const extraOptions = useAppSelector(getExtraOptions)
  const enableExtraOptions = useAppSelector(getEnableSelectingExtraOptions)

  if (!extraOptions.length) return null

  const updateExtraItem = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget
    dispatch(addCheckout(Number(value)))
    e.currentTarget.selectedIndex = 0
  }

  const selectId = `extra-${id}`

  return (
    <Select
      id={selectId}
      options={enableExtraOptions ? extraOptions : []}
      onChange={updateExtraItem}
    />
  )
}
