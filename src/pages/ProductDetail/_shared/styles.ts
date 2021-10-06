import styled from 'styled-components'

import { flexbox, media, positionCenterY, textStyle } from 'src/styles/utils'

export const StyledProductSection = styled.section`
  padding-bottom: 20px;

  ${media.greaterThan('tablet')`
    width: 100%;
    max-width: 692px;
    padding-bottom: 80px;
    margin-right: auto;
    margin-left: auto;
  `}

  ${media.greaterThan('desktop')`
    margin-left: 0;
  `}
`

export const StyledProductSectionHeader = styled.header`
  ${flexbox('start')};
  position: relative;
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.white};

  .title {
    ${textStyle('base')};
    color: ${({ theme }) => theme.colors.dark};
  }

  .badge {
    ${textStyle('base')};
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.blue};
  }

  .text-button,
  .icon-button {
    ${positionCenterY()};
    right: -15px;

    &:active {
      opacity: 0.4;
    }
  }

  .text-button {
    ${textStyle('sm')};
    padding: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue};
  }

  .icon-button {
    @include flexbox;
    width: ${22 + 15 * 2}px;
    height: ${22 + 15 * 2}px;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.secondary};

    &.is-right {
      transform: translateY(-50%) rotate(-90deg);
    }
  }

  @include responsive(T) {
    .title,
    .badge {
      ${textStyle('md')};
    }

    .text-button,
    .icon-button {
      &:hover {
        opacity: 0.4;
      }
    }

    .text-button {
      ${textStyle('base')};
    }
  }
`

export const StyledProductSectionContent = styled.div``

export const StyledIconButton = styled.button``

export const StyledTextButton = styled.button``

export const StyledProductSectionDivider = styled.div`
  height: 8px;
  margin: 0 -15px;
  background-color: ${({ theme }) => theme.colors.border};

  .big {
    height: 24px;
  }

  ${media.greaterThan('tablet')`
    display: none;
  `}
`
