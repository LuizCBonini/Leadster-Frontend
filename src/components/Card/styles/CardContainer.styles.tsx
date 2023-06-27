import { styled } from 'styled-components'
import CardIcon from './CardIcon.styles'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  cursor: pointer;
  overflow: hidden;
  flex-wrap: wrap;
  width: 30rem;
  box-shadow: 0px 10px 10px 0px #00000010;
  transition: 200ms ease;
  position: relative;
  &:hover {
    color: var(--primary-color);
    transition: 200ms ease;
    &::after {
      content: '';
      background-color: var(--primary-color);
      opacity: 0.5;
      width: 100%;
      height: 15rem;
      position: absolute;
      transition: 200ms ease;
    }
    ${CardIcon} {
      opacity: 1;
      transition: 200ms ease;
    }
  }
  &::after {
    content: '';
    opacity: 0;
  }
`

export default CardContainer
