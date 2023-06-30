import styled from 'styled-components'

const HeaderContainer = styled.header`
  height: 11rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    height: 5rem;
  }
`

export default HeaderContainer
