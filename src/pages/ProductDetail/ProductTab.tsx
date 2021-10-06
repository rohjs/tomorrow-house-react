import React, { useEffect, useState } from 'react'
import { throttle } from 'lodash-es'
import cx from 'classnames'

import { useResponsive } from 'src/hooks'

import { Grid } from 'src/components'
import { StyledProductDetailTab } from './styles'

const ProductTab: React.FC = () => {
  const { isMobile } = useResponsive()
  const [lastScrollY, setLastScrollY] = useState(window.scrollY)
  const [scrollDirection, setScrollDirection] = useState(0)

  const toggleScrollDirection = () => {
    if (isMobile) return
    const { scrollY } = window
    if (scrollY > lastScrollY) {
      if (scrollDirection !== 1) setScrollDirection(1)
    } else {
      if (scrollDirection !== -1) setScrollDirection(-1)
    }
  }

  const handleScroll = throttle(() => {
    toggleScrollDirection()
    setLastScrollY(window.scrollY)
  }, 200)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <StyledProductDetailTab
      className={cx({ scrollUp: !isMobile && scrollDirection === -1 })}
    >
      <Grid sm={4} lg={8}>
        <ul className="product-tab-list" role="tablist">
          <li
            className="product-tab-item is-active"
            role="tab"
            aria-labelledby="product-spec"
          >
            <button type="button">상품정보</button>
          </li>
          <li
            className="product-tab-item"
            role="tab"
            aria-labelledby="product-review"
          >
            <button type="button">
              리뷰
              <strong className="badge" aria-label="566개 리뷰">
                566
              </strong>
            </button>
          </li>
          <li
            className="product-tab-item"
            role="tab"
            aria-labelledby="product-inquiry"
          >
            <button type="button">
              문의
              <strong className="badge" aria-label="96개 문의">
                96
              </strong>
            </button>
          </li>
          <li
            className="product-tab-item"
            role="tab"
            aria-labelledby="product-shipment"
          >
            <button type="button">배송/환불</button>
          </li>
          <li
            className="product-tab-item"
            role="tab"
            aria-labelledby="product-recommendation"
          >
            <button type="button">추천</button>
          </li>
        </ul>
      </Grid>
    </StyledProductDetailTab>
  )
}

export default ProductTab
