import React from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector } from 'src/hooks'

import { StarRating } from 'src/components'
import { StyledProductInfoHeader } from './styles'

export const ProductInfoHeader: React.FC = () => {
  const { brand, name, reviewAvg, reviewCount } = useAppSelector(
    (state) => state.productDetail
  )

  return (
    <StyledProductInfoHeader>
      <Link className="brand" to={`/seller/${brand.id}`}>
        {brand.name}
      </Link>
      <h1 className="title">{name}</h1>

      <div className="review">
        <StarRating
          id="productInfoHeader"
          rating={reviewAvg}
          size={13}
          tabletSize={16}
        />

        <p>
          <strong>{reviewCount}</strong>
          <span className="sm-hidden">개 리뷰</span>
        </p>
      </div>
    </StyledProductInfoHeader>
  )
}
