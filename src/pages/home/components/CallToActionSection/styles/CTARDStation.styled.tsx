import { styled } from 'styled-components'

const CTAButtonContainer = styled.div`
  display: flex;
  column-gap: 1rem;
  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
  }
`

export default CTAButtonContainer
