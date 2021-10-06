import React, { ReactNode } from 'react'

import { StyledProductSectionContent } from './styles'

interface ProductSectionContentProps {
  children?: ReactNode
}

export const ProductSectionContent: React.FC<ProductSectionContentProps> = ({
  children,
}) => {
  return <StyledProductSectionContent>{children}</StyledProductSectionContent>
}
