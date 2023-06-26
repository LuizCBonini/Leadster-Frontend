import styled from 'styled-components'

const Title = styled.h1`
  color: var(--primary-color);
  font-size: 8rem;
  font-family: var(--plus-jakarta-sans-bold);
  position: relative;
  padding: 0 2rem;
  margin-bottom: 2rem;
  &::before {
    content: '';
    height: 0.1rem;
    width: 100%;
    background-color: #bebebe;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

export default Title
