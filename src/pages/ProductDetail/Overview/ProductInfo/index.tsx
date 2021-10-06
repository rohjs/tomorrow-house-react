import React from 'react'

import { useResponsive } from 'src/hooks'

import { ProductOrderControls, ProductOrderCheckouts } from '../../Forms'
import { ProductInfoHeader } from './Header'
import { ProductInfoPrice } from './Price'
import { ProductInfoDelivery } from './Delivery'
import { StyledProductInfo } from './styles'

const ProductInfo: React.FC = () => {
  const { isDesktop } = useResponsive()
  return (
    <StyledProductInfo>
      <ProductInfoHeader />
      <ProductInfoPrice />
      <ProductInfoDelivery />
      {isDesktop && (
        <div className="productInfoForm">
          <ProductOrderControls id="product-info" />
          <ProductOrderCheckouts id="product-info" />
        </div>
      )}
    </StyledProductInfo>
  )
}

export default ProductInfo
