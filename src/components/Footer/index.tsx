import Image from 'next/image'

// Imagens
import AnimatedLogo from '@public/images/leadster_270.gif'

// Styled Components
import FooterContainer from './styles/FooterContainer.styles'
import FooterLogoContainer from './styles/FooterLogoContainer.styles'
import FooterParagraph from './styles/FooterParagraph.styles'

// Components
import LinksColumn from './components/LinksColumn'
import Copyright from './components/Copyright'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogoContainer>
        <Image alt="Logo da Leadster animado" src={AnimatedLogo} />
        <FooterParagraph>Transformando visitantes em clientes.</FooterParagraph>
      </FooterLogoContainer>
      <LinksColumn />
      <Copyright />
    </FooterContainer>
  )
}

export default Footer
