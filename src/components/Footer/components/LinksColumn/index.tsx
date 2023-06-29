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

const LinksColumn = () => {
  return (
    <FooterLinksContainer>
      <FooterLinksColumn>
        <FooterLinksTitle>Links Principais</FooterLinksTitle>
        <FooterLinks href="#home">Home</FooterLinks>
        <FooterLinks>Ferramenta</FooterLinks>
        <FooterLinks>Preços</FooterLinks>
        <FooterLinks>Contato</FooterLinks>
      </FooterLinksColumn>
      <FooterLinksColumn>
        <FooterLinksTitle>Cases</FooterLinksTitle>
        <FooterLinks>Geração de Leads B2B</FooterLinks>
        <FooterLinks>Geração de Leads em Software</FooterLinks>
        <FooterLinks>Geração de Leads em Imobiliária</FooterLinks>
        <FooterLinks>Cases de sucesso</FooterLinks>
      </FooterLinksColumn>
      <FooterLinksColumn>
        <FooterLinksTitle>Materiais</FooterLinksTitle>
        <FooterLinks>Blog</FooterLinks>
        <FooterLinks>Parceria com Agências</FooterLinks>
        <FooterLinks>Guia Definitivo do Marketing</FooterLinks>
        <FooterLinks>Materiais Gratuitos</FooterLinks>
      </FooterLinksColumn>
      <FooterLinksColumn>
        <FooterLinksTitle>Siga a Leadster</FooterLinksTitle>
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
          <FooterLinkStrongParagraph>Telefone: </FooterLinkStrongParagraph>
          &#40;42&#41; 98828-98851
        </FooterLinkParagraph>
      </FooterLinksColumn>
    </FooterLinksContainer>
  )
}

export default LinksColumn
