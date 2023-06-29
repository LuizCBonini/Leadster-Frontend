import { PaginationButtonProps } from '@types'
import { styled } from 'styled-components'

const PaginationButton = styled.span<PaginationButtonProps>`
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  color: ${props => (props.isActive ? 'var(--primary-color)' : '')};
  border: ${props =>
    props.isActive ? '0.1rem var(--primary-color) solid' : ''};
  border-radius: 0.5rem;
  &:hover {
    color: var(--primary-color);
  }
`
export default PaginationButton
