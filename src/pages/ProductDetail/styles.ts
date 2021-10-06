import styled from 'styled-components'

import { flexbox, media, stripPx, textStyle } from 'src/styles/utils'
import { GNB_HEIGHT_LG } from 'src/components/GlobalHeader/Gnb/styles'
import { LNB_HEIGHT_LG } from 'src/components/GlobalHeader/Lnb/styles'

const PRODUCT_TAB_HEIGHT_SM = `40px`
const PRODUCT_TAB_HEIGHT_LG = `56px`

export const StyledProductDetailTab = styled.nav`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.levels.productTab};
  width: 100%;
  height: ${PRODUCT_TAB_HEIGHT_SM};
  background-color: ${({ theme }) => theme.colors.background};

  ul {
    ${flexbox('start')};
    margin: 0 -15px;
  }

  li {
    width: 20%;

    &.active {
      button {
        color: ${({ theme }) => theme.colors.blue};
        border-bottom-color: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  button {
    ${flexbox()};
    ${textStyle('xs')};
    width: 100%;
    height: ${PRODUCT_TAB_HEIGHT_SM};
    font-weight: 700;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.dark};
    border-bottom: 2px solid transparent;

    &:active {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  .badge {
    margin-left: 4px;
    color: ${({ theme }) => theme.colors.secondary};
  }

  ${media.greaterThan('tablet')`
    top: ${GNB_HEIGHT_LG};
    height: ${PRODUCT_TAB_HEIGHT_LG};
    margin: 40px 0;
    transition: top 200ms;
    background-color: ${({ theme }) => theme.colors.background};

    &.scrollUp {
      top: ${stripPx(GNB_HEIGHT_LG) + stripPx(LNB_HEIGHT_LG)}px;
    }

    button {
      ${textStyle('base')};
      height: ${PRODUCT_TAB_HEIGHT_LG};
    }
  `}
`

export const StyledProductDetailSpec = styled.div`
  ${flexbox('start', 'start')};
  position: relative;
  flex-direction: column;
  padding-top: 20px;

  figure {
    width: 100%;

    img {
      width: 100%;
      height: auto;
    }
  }

  .buttonGroup {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};

    &::after {
      position: absolute;
      bottom: 55px;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 90px;
      background-image: linear-gradient(to top, #fff, transparent);
      content: '';
    }

    button {
      position: relative;
      z-index: 2;
      width: 100%;
    }
  }

  ${media.lessThan('tablet')`
    max-height: 540px;
    overflow: hidden;

    &.showAll {
      max-height: initial;
    }
  `}

  ${media.greaterThan('tablet')`
    padding: 0;
  `}
`
