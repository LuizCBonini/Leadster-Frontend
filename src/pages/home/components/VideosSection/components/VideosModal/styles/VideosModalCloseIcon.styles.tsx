import { CgClose } from 'react-icons/cg'
import { styled } from 'styled-components'

const VideosModalCloseIcon = styled(CgClose)`
  margin-top: 1.5rem;
  margin-right: 1rem;
  color: #707070;
  cursor: pointer;
  position: fixed;
  right: 0;
  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    font-size: 1.4rem;
  }
`
export default VideosModalCloseIcon
