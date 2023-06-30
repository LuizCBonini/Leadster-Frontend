import { styled } from 'styled-components'

const VideosMenuDropDown = styled.span`
  display: flex;
  align-items: center;
  margin-left: 5rem;

  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    margin-left: 0;
  }

  @media screen and (max-width: 768px) {
    /* Estilos para laptops */
    margin-left: 0;
  }
`

export default VideosMenuDropDown
