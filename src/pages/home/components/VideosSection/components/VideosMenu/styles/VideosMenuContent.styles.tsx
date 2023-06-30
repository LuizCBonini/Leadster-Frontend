import { styled } from 'styled-components'

const VideosMenuContent = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1.5rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    display: grid;
    grid-template-columns: 80%;
    row-gap: 1.5em;
  }

  @media screen and (max-width: 768px) {
    /* Estilos para laptops */
    column-gap: 1rem;
    padding: 0 1rem;
  }
`

export default VideosMenuContent
