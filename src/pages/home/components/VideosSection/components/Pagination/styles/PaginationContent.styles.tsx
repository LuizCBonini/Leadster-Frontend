import { styled } from 'styled-components'

const PaginationContent = styled.p`
  font-family: var(--plus-jakarta-sans-bold);
  display: flex;
  align-items: center;
  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    font-size: 1.2rem;
  }
`
export default PaginationContent
