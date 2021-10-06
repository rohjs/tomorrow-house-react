import React from 'react'

import { useAppSelector } from 'src/hooks'
import { getDepthLevel } from 'src/app/product/detail'

import { OneDepthControl } from './OneDepthControl'
import { TwoDepthControl } from './TwoDepthControl'
import { ExtraOptionControl } from './ExtraOptionControl'
import { StyledProductOrderControls } from '../styles'

interface ProductOrderControlsProps {
  id: string
  className?: string
}

const ProductOrderControls: React.FC<ProductOrderControlsProps> = ({
  id,
  className,
}) => {
  const depthLevel = useAppSelector(getDepthLevel)

  return (
    <StyledProductOrderControls className={className}>
      {depthLevel === 1 && <OneDepthControl id={id} />}
      {depthLevel === 2 && <TwoDepthControl id={id} />}
      <ExtraOptionControl id={id} />
    </StyledProductOrderControls>
  )
}

export default ProductOrderControls
