import { styled } from 'styled-components'

const CardTitle = styled.p`
  font-family: var(--plus-jakarta-sans-bold);
  padding: 2rem;
  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    font-size: 1.4rem;
  }
`
export default CardTitle
