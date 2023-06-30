import { styled } from 'styled-components'

const VideosGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 5rem;
  row-gap: 5rem;
  margin: 5rem 0;
  &::after {
    content: '';
    grid-column-start: 1;
    grid-column-end: 4;
    height: 0.1rem;
    width: 100%;
    background-color: #bebebe;
  }

  @media screen and (max-width: 768px) {
    /* Estilos para dispositivos laptops */
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    row-gap: 2rem;
    &::after {
      content: '';
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }

  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    display: flex;
    flex-direction: column;
  }
`
export default VideosGridContainer
