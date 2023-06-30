import Image from 'next/image'

// Imagens
import AnimatedLogo from '@public/images/leadster_270.gif'

// Styled Components
import FooterContainer from './styles/FooterContainer.styles'
import FooterLogoContainer from './styles/FooterLogoContainer.styles'
import FooterParagraph from './styles/FooterParagraph.styles'

// Components
import Copyright from './components/Copyright'
import LinksColumn from './components/LinksColumn'

// Translation
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <FooterContainer>
      <FooterLogoContainer>
        <Image alt={t('components.Footer.footerLogoAlt')} src={AnimatedLogo} />
        <FooterParagraph>
          {t('components.Footer.footerParagraph')}
        </FooterParagraph>
      </FooterLogoContainer>
      <LinksColumn />
      <Copyright />
    </FooterContainer>
  )
}

export default Footer
