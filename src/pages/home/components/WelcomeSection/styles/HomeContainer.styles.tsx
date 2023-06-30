import styled from 'styled-components'

const HomeContainer = styled.div`
  height: calc(100vh - 11rem); /* Tela - Header */
  background-color: var(--primary-color-light);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    height: calc(100vh - 5rem); /* Tela - Header */
  }
`

export default HomeContainer
