import React, { useState } from 'react'
import cx from 'classnames'

import { useAppSelector, useResponsive } from 'src/hooks'
import { getProductImages } from 'src/app/product/detail'

import { Button } from 'src/components'
import {
  ProductSection,
  ProductSectionContent,
  ProductSectionHeader,
} from './_shared'
import { StyledProductDetailSpec } from './styles'

const ProductDetailSpec: React.FC = () => {
  const imageUrls = useAppSelector(getProductImages)

  const { isMobile } = useResponsive()

  const [showAll, setShowAll] = useState(false)

  const handleShowAll = () => {
    if (!isMobile) return
    setShowAll(true)
  }

  return (
    <ProductSection id="product-spec">
      <ProductSectionHeader title="상품 정보" />
      <ProductSectionContent>
        <StyledProductDetailSpec
          className={cx({ showAll: isMobile && showAll })}
        >
          {imageUrls.map((url) => {
            const key = `product-spec-${url}`
            return (
              <figure key={key}>
                <img src={url} alt="" />
              </figure>
            )
          })}

          {isMobile && !showAll && (
            <div className="buttonGroup">
              <Button variant="primary" size={55} onClick={handleShowAll}>
                펼치기
              </Button>
            </div>
          )}
        </StyledProductDetailSpec>
      </ProductSectionContent>
    </ProductSection>
  )
}

export default ProductDetailSpec
