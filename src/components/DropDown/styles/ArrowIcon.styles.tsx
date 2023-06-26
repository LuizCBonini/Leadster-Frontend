import { ArrowIconProps } from '@types'
import styled, { keyframes } from 'styled-components'

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`

const rotateForwardAnimation = keyframes`
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0);
  }
`

const ArrowButton = styled.span<ArrowIconProps>`
  transition: 300ms ease-in;
  animation: ${props =>
      props.isOpen ? rotateAnimation : rotateForwardAnimation}
    0.3s linear forwards;
`

export default ArrowButton
