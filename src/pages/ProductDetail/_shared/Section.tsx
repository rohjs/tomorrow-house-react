import React, { ReactNode } from 'react'

import { useResponsive } from 'src/hooks'
import { StyledProductSection, StyledProductSectionDivider } from './styles'

import { Container, Column, Row } from 'src/components'

interface ProductSectionProps {
  id: string
  className?: string
  children?: ReactNode
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  id,
  className,
  children,
}) => {
  const { isMobile } = useResponsive()

  return (
    <Container>
      <Row>
        <Column sm={4} lg={8}>
          <StyledProductSection className={className} id={id} role="tabpanel">
            {children}
          </StyledProductSection>
          {isMobile && <StyledProductSectionDivider />}
        </Column>
      </Row>
    </Container>
  )
}
