import styled from 'styled-components'

export const Slogan = styled.p`
  font-family: var(--plus-jakarta-sans-medium);
  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    font-size: 1rem;
    text-align: center;
  }
  @media screen and (max-width: 320px) {
    /* Estilos para dispositivos móveis pequenos */
    max-width: 25rem;
  }
`
export const BoldLetterSlogan = styled.span`
  font-family: var(--plus-jakarta-sans-bold);
`
