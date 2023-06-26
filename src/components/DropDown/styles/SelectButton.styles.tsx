import { ArrowIconProps } from '@types'
import { styled } from 'styled-components'

const SelectButton = styled.div<ArrowIconProps>`
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border: 0.1rem solid
    ${props => (props.isOpen ? 'var(--primary-color)' : '#333')};
  background-color: #fff;
  cursor: pointer;
  width: max-content;
  font-family: var(--plus-jakarta-sans-medium);
  font-size: 1.4rem;
  color: ${props => (props.isOpen ? 'var(--primary-color)' : '#333')};
`
export default SelectButton
