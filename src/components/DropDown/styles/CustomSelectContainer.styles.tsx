import { styled } from 'styled-components'

const CustomSelectContainer = styled.div`
  position: relative;
  width: 20rem;

  @media screen and (max-width: 768px) {
    /* Estilos para laptops */
    width: 17rem;
  }

  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    width: 20rem;
  }
`

export default CustomSelectContainer
