import { ButtonProps } from '@types'
import { styled } from 'styled-components'

const CTAButtonStyles = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: 3rem;
  padding: 2rem 3rem;
  font-family: var(--plus-jakarta-sans-semibold);
  border: none;
  background-color: var(--primary-color);
  color: #fff;
  transition: 400ms ease-in-out;

  &:hover {
    border: 0.1rem var(--primary-color) solid;
    color: var(--primary-color);
    background-color: #fff;
    transition: 400ms ease-in-out;
  }
`

export default CTAButtonStyles
