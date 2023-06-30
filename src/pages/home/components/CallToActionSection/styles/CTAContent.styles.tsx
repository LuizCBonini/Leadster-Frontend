import styled from 'styled-components'

export const CTAContentContainer = styled.div`
  width: 55rem;
  z-index: 1;
  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    width: 35rem;
  }

  @media screen and (max-width: 320px) {
    /* Estilos para dispositivos móveis pequenos */
    width: 32rem;
  }
`

export const CTAContentTitle = styled.h1`
  font-size: 3.4rem;
  max-width: 50rem;
  font-family: var(--plus-jakarta-sans-light);
  @media screen and (max-width: 320px) {
    /* Estilos para dispositivos móveis pequenos */
    font-size: 2.5rem;
    max-width: 30rem;
    margin-left: 2rem;
  }
`

export const CTAContentStrong = styled.span`
  font-family: var(--plus-jakarta-sans-bold);
`

export const CTAContentSubTitle = styled.p`
  font-size: 1.8rem;
  font-family: var(--plus-jakarta-sans-medium);
  margin: 1rem 0;
  padding-bottom: 2rem;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 0.1rem;
    background-color: #bebebe;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  @media screen and (max-width: 320px) {
    /* Estilos para dispositivos móveis pequenos */
    margin-left: 2rem;
    font-size: 1.4rem;
  }
`

export const CTAContentCreditCard = styled.span`
  margin-top: 1rem;
  display: flex;
  column-gap: 0.5rem;
  @media screen and (max-width: 768px) {
    /* Estilos para dispositivos laptops */
    align-items: center;
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 320px) {
    /* Estilos para dispositivos móveis pequenos */
    flex-direction: column;
    row-gap: 1rem;
  }
`

export const CTAContentCreditCardParagraph = styled.p`
  font-size: 1.4rem;
  font-family: var(--plus-jakarta-sans-medium);
  border-right: 0.2rem black solid;
  padding-right: 0.5rem;
  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    border-right: none;
  }
`

export const CTAContentRatingParagraph = styled.p`
  font-size: 1.4rem;
  font-family: var(--plus-jakarta-sans-medium);
`
