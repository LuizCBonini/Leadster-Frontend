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

  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    font-size: 4rem;
  }

  @media screen and (max-width: 320px) {
    /* Estilos para dispositivos móveis pequenos */
    font-size: 3.3rem;
  }
`

export default Title
