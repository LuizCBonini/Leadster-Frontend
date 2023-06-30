import { styled } from 'styled-components'

const VideosMenuCardLabel = styled.p`
  font-family: var(--plus-jakarta-sans-bold);
  font-size: 1.4rem;
  margin-right: 2rem;

  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    font-size: 1rem;
    margin-right: 1rem;
    width: 8rem;
  }

  @media screen and (max-width: 768px) {
    /* Estilos para dispositivos laptops */
    font-size: 1.2rem;
    margin-right: 0.5rem;
    width: 8rem;
  }
`

export default VideosMenuCardLabel
