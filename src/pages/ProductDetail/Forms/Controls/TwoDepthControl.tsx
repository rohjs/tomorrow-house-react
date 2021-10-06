import React, { ChangeEvent, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from 'src/hooks'
import { getFirstOptions, getSecondOptions } from 'src/app/product/detail'
import { addCheckout } from 'src/app/product/checkout'
import { useFormControls } from './useFormControls'

import { Select } from 'src/components'

interface TwoDepthControlProps {
  id: string
}

export const TwoDepthControl: React.FC<TwoDepthControlProps> = ({ id }) => {
  const dispatch = useAppDispatch()
  const firstOptions = useAppSelector(getFirstOptions)
  const secondOptions = useAppSelector(getSecondOptions)

  const { getOptionId } = useFormControls()

  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')

  const updateFirstItem = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget
    setFirst(value)
  }

  const updateSecondItem = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget
    setSecond(value)
  }

  useEffect(() => {
    if (first && second) {
      const optionId = getOptionId(first, second)
      dispatch(addCheckout(optionId))
      setTimeout(() => {
        setFirst('')
        setSecond('')
      }, 300)
    }
  }, [dispatch, first, getOptionId, second])

  return (
    <>
      <Select
        active={!first}
        id={`two-depth-control-${id}-first`}
        placeholder={firstOptions.placeholder}
        options={firstOptions.options}
        required
        selected={first}
        onChange={updateFirstItem}
      />
      <Select
        active={!!first && !second}
        id={`two-depth-control-${id}-second`}
        placeholder={secondOptions.placeholder}
        options={first ? secondOptions.options : []}
        required
        selected={second}
        onChange={updateSecondItem}
      />
    </>
  )
}
