import { styled } from 'styled-components'

const HeaderLanguageButton = styled.button`
  padding: 1rem 1.2rem;
  border-radius: 50%;
  border: 0.1rem var(--primary-color) solid;
  background-color: var(--primary-color-light);
  font-size: 1.4rem;
  position: absolute;
  right: 2rem;
  cursor: pointer;
  transition: 300ms ease;
  &:hover {
    background-color: var(--primary-color);
    color: #fff;
  }
`
export default HeaderLanguageButton
