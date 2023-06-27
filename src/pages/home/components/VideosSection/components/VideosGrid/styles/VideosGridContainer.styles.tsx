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
    background-color: #bebebe;
  }
`
export default VideosGridContainer
