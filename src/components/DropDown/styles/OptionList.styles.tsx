import { styled } from 'styled-components'

export const OptionList = styled.ul`
  position: absolute;
  width: fit-content;
  border-radius: 1rem;
  z-index: 1;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid var(--primary-color);
  border-top: none;
  background-color: #fff;
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: var(--primary-color);
  font-family: var(--plus-jakarta-sans-medium);
  font-size: 1.4rem;
`
export const OptionItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color-light);
  }
`
