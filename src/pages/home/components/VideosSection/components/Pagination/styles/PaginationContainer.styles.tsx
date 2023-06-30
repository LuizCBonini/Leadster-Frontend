import { styled } from 'styled-components'

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    margin-bottom: 2rem;
  }
`
export default PaginationContainer
