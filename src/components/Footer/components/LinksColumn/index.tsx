// Icons
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

// Styled Components
import {
  FooterLinkParagraph,
  FooterLinks,
  FooterLinksColumn,
  FooterLinksContainer,
  FooterLinksSocialMedia,
  FooterLinksSocialMediaContainer,
  FooterLinksTitle,
  FooterLinkStrongParagraph,
} from './styles/FooterLinks.styles'

// Translation
import { useTranslation } from 'react-i18next'

const LinksColumn = () => {
  const { t } = useTranslation()
  return (
    <FooterLinksContainer>
      <FooterLinksColumn>
        <FooterLinksTitle>
          {t('components.Footer.firstColumn.firstColumnTitle')}
        </FooterLinksTitle>
        <FooterLinks href="#home">
          {t('components.Footer.firstColumn.homeLink')}
        </FooterLinks>
        <FooterLinks>{t('components.Footer.firstColumn.toolLink')}</FooterLinks>
        <FooterLinks>
          {t('components.Footer.firstColumn.pricesLink')}
        </FooterLinks>
        <FooterLinks>
          {t('components.Footer.firstColumn.contactLink')}
        </FooterLinks>
      </FooterLinksColumn>
      <FooterLinksColumn>
        <FooterLinksTitle>
          {t('components.Footer.secondColumn.secondColumnTitle')}
        </FooterLinksTitle>
        <FooterLinks>{t('components.Footer.secondColumn.b2bLink')}</FooterLinks>
        <FooterLinks>
          {t('components.Footer.secondColumn.softwareLink')}
        </FooterLinks>
        <FooterLinks>
          {t('components.Footer.secondColumn.estateSalesLink')}
        </FooterLinks>
        <FooterLinks>
          {t('components.Footer.secondColumn.successLink')}
        </FooterLinks>
      </FooterLinksColumn>
      <FooterLinksColumn>
        <FooterLinksTitle>
          {t('components.Footer.thirdColumn.thirdColumnTitle')}
        </FooterLinksTitle>
        <FooterLinks>{t('components.Footer.thirdColumn.blogLink')}</FooterLinks>
        <FooterLinks>
          {t('components.Footer.thirdColumn.agencyLink')}
        </FooterLinks>
        <FooterLinks>
          {t('components.Footer.thirdColumn.marketingGuideLink')}
        </FooterLinks>
        <FooterLinks>
          {t('components.Footer.thirdColumn.materialsLink')}
        </FooterLinks>
      </FooterLinksColumn>
      <FooterLinksColumn>
        <FooterLinksTitle>
          {t('components.Footer.fourthColumn.fourthColumnTitle')}
        </FooterLinksTitle>
        <FooterLinksSocialMediaContainer>
          <FooterLinksSocialMedia
            href="https://www.linkedin.com/company/leadster-platform/"
            target="_blanc"
          >
            <FaLinkedinIn />
          </FooterLinksSocialMedia>
          <FooterLinksSocialMedia
            href="https://www.facebook.com/leadsterplatform"
            target="_blanc"
          >
            <FaFacebookF />
          </FooterLinksSocialMedia>
          <FooterLinksSocialMedia
            href="https://www.instagram.com/leadster.com.br/"
            target="_blanc"
          >
            <FaInstagram />
          </FooterLinksSocialMedia>
        </FooterLinksSocialMediaContainer>
        <FooterLinkParagraph>
          <FooterLinkStrongParagraph>E-mail: </FooterLinkStrongParagraph>
          contato@leadster.com.br
        </FooterLinkParagraph>
        <FooterLinkParagraph>
          <FooterLinkStrongParagraph>
            {t('components.Footer.fourthColumn.phone')}{' '}
          </FooterLinkStrongParagraph>
          &#40;42&#41; 98828-98851
        </FooterLinkParagraph>
      </FooterLinksColumn>
    </FooterLinksContainer>
  )
}

export default LinksColumn
