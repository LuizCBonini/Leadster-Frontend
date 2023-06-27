import styled from 'styled-components'

const VideosMenuContainer = styled.div`
  position: relative;
  margin-top: 10rem;
  &::after {
    content: '';
    height: 0.1rem;
    width: 100%;
    background-color: #bebebe;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

export default VideosMenuContainer
