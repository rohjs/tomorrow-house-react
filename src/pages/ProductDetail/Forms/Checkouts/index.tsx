import React from 'react'

import { useAppSelector } from 'src/hooks'
import { getCheckoutItems } from 'src/app/product/checkout'

import { CheckoutItem } from './Item'

interface ProductOrderCheckoutsProps {
  id: string
}

const ProductOrderCheckouts: React.FC<ProductOrderCheckoutsProps> = ({
  id,
}) => {
  const checkouts = useAppSelector(getCheckoutItems)

  return (
    <ol>
      {Object.entries(checkouts).map(([optionId, count]) => {
        const key = `${id}-checkout-item-${optionId}`
        return (
          <li key={key}>
            <CheckoutItem id={id} optionId={optionId} count={count} />
          </li>
        )
      })}
    </ol>
  )
}

export default ProductOrderCheckouts
