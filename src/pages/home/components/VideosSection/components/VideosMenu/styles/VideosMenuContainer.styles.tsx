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
  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    margin-top: 3rem;
    max-width: 100%;
  }
`

export default VideosMenuContainer
