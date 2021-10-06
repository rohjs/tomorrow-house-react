import React from 'react'

import { useAppSelector, useResponsive } from 'src/hooks'
import { getPoint, getPrice } from 'src/app/product/detail'

import { Price, PriceOff, Tag } from 'src/components'
import {
  StyledProductInfoMileage,
  StyledProductInfoDiscount,
  StyledProductInfoPrice,
} from './styles'

export const ProductInfoPrice: React.FC = () => {
  const point = useAppSelector(getPoint)
  const { originalPrice, sellingPrice, isOnDiscount, percentage } =
    useAppSelector(getPrice)

  const { isMobile } = useResponsive()

  const discount = (
    <StyledProductInfoDiscount className="discount">
      <span className="rate">{percentage}</span>
      <span className="percent">%</span>
    </StyledProductInfoDiscount>
  )

  const pointGuide = (
    <StyledProductInfoMileage className="point">
      <strong aria-label={`${point.value} 포인트`}>{point.value}P</strong>
      적립해드립니다. (VIP 3배 혜택 적용됨)
    </StyledProductInfoMileage>
  )

  if (isMobile)
    return (
      <StyledProductInfoPrice>
        <div className="originalPriceWrapper">
          {isOnDiscount && discount}
          <PriceOff amount={originalPrice} />
        </div>

        <div className="sellingPriceWrapper">
          <Price className="sellingPrice" amount={sellingPrice} size={20} />
          <Tag color="red" label="특가" />
        </div>

        {pointGuide}
      </StyledProductInfoPrice>
    )

  return (
    <StyledProductInfoPrice>
      <div className="priceWrapper">
        {isOnDiscount && discount}

        <div>
          <PriceOff amount={originalPrice} />
          <div className="sellingPriceWrapper">
            <Price className="sellingPrice" amount={sellingPrice} size={32} />
            <Tag color="red" label="특가" />
          </div>
        </div>
      </div>

      {pointGuide}
    </StyledProductInfoPrice>
  )
}
