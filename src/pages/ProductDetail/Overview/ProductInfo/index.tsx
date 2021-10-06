import React from 'react'

import { ProductOrderControls, ProductOrderCheckouts } from '../../Forms'
import { ProductInfoHeader } from './Header'
import { ProductInfoPrice } from './Price'
import { ProductInfoDelivery } from './Delivery'
import { StyledProductInfo } from './styles'

const ProductInfo: React.FC = () => {
  return (
    <StyledProductInfo>
      <ProductInfoHeader />
      <ProductInfoPrice />
      <ProductInfoDelivery />
      <ProductOrderControls id="product-info" />
      <ProductOrderCheckouts id="product-info" />
    </StyledProductInfo>
  )
}

export default ProductInfo
