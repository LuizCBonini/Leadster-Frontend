import styled from 'styled-components'

export const VideosModalTitle = styled.h1`
  font-family: var(--plus-jakarta-sans-semibold);
  font-size: 1.8rem;
  padding: 3rem 7rem 2rem 7rem;
  text-align: center;

  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    font-size: 1.4rem;
    padding: 2.5rem 4rem 1rem 4rem;
  }

  @media screen and (max-width: 768px) {
    /* Estilos para dispositivos laptops */
    font-size: 1.6rem;
    padding: 2.5rem 5rem 1rem 5rem;
  }
`
export const VideosModalTitleType = styled.span`
  color: var(--primary-color);
`
