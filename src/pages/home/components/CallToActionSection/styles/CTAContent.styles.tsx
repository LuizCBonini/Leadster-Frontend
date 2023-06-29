import styled from 'styled-components'

export const CTAContentContainer = styled.div`
  width: 55rem;
`

export const CTAContentTitle = styled.h1`
  font-size: 3.4rem;
  max-width: 50rem;
  font-family: var(--plus-jakarta-sans-light);
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
`

export const CTAContentCreditCard = styled.span`
  margin-top: 1rem;
  display: flex;
  column-gap: 0.5rem;
`

export const CTAContentCreditCardParagraph = styled.p`
  font-size: 1.4rem;
  font-family: var(--plus-jakarta-sans-medium);
  border-right: 0.2rem black solid;
  padding-right: 0.5rem;
`

export const CTAContentRatingParagraph = styled.p`
  font-size: 1.4rem;
  font-family: var(--plus-jakarta-sans-medium);
`
