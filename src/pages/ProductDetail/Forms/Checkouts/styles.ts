import styled from 'styled-components'

import {
  flexbox,
  inlineFlexbox,
  media,
  positionCenterY,
  textStyle,
} from 'src/styles/utils'

export const StyledCheckoutItem = styled.div`
  position: relative;
  padding: 8px 10px 8px 12px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;

  .checkoutHeader {
    margin-bottom: 8px;
  }

  .checkoutTitle {
    ${textStyle('xs')};
    padding-right: 26px; // 36px - 10px
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
  }

  .delete {
    ${inlineFlexbox()};
    position: absolute;
    top: 8px;
    right: 8px;
    width: 20px;
    height: 20px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondary};

    &:hover,
    &:active {
      opacity: 0.4;
    }
  }

  .checkoutSelect {
    position: relative;
    display: inline-block;

    &:hover {
      select {
        border-color: ${({ theme }) => theme.colors.tertiary};
      }

      i {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }

    select {
      ${textStyle('sm')};
      width: 72px;
      height: 24px;
      padding: 0 8px;
      line-height: 1;
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 3px;
      transition: border-color 100ms ease-in-out;
      appearance: none;
    }

    svg {
      ${positionCenterY()};
      right: 2px;
      font-size: 20px;
      color: ${({ theme }) => theme.colors.tertiary};
      pointer-events: none;
      transition: color 100ms ease-in-out;
    }
  }

  .checkoutFooter {
    ${flexbox('between')};
  }

  ${media.greaterThan('tablet')`
    .checkoutTitle {
      ${textStyle('base')};
    }
  `}
`
