import Image from 'next/image'
import { styled } from 'styled-components'

const CTAGraphicImage = styled(Image)`
  z-index: 1;
  width: 50rem;
  height: 50rem;
  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    width: 40rem;
    height: 40rem;
  }
  @media screen and (max-width: 320px) {
    /* Estilos para dispositivos móveis pequenos */
    width: 30rem;
    height: 30rem;
  }
`

export default CTAGraphicImage
