import { styled } from 'styled-components'

export const VideosModalDescriptionContainer = styled.div`
  padding: 2rem;
  max-height: 13rem;
  overflow: auto;
`

export const VideosModalDescriptionTitle = styled.p`
  font-family: var(--plus-jakarta-sans-extra-bold);
  font-size: 1.2rem;
  position: relative;
  margin-bottom: 1rem;
  &::after {
    content: '';
    height: 0.1rem;
    width: 100%;
    background-color: #bebebe;
    position: absolute;
    bottom: -0.5rem;
    left: 0;
  }
`

export const VideosModalDescriptionContent = styled.p`
  font-family: var(--plus-jakarta-sans-extra-medium);
  font-size: 1.2rem;
  display: flex;
  column-gap: 0.5rem;
`

export const VideosModalDescriptionButtons = styled.div`
  display: flex;
  column-gap: 0.5rem;
`
