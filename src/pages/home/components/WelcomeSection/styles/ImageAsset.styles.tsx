import Image from 'next/image'
import styled from 'styled-components'

const ImageAsset = styled(Image)`
  position: absolute;
  right: 0;
  top: 1rem;
  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    width: 2.2rem;
    height: 2rem;
    top: 0.5rem;
    right: 1.2rem;
  }
  @media screen and (max-width: 320px) {
    /* Estilos para dispositivos móveis pequenos */
    right: 1.1rem;
    top: 0.2rem;
  }
`
export default ImageAsset
