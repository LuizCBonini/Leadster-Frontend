// Images
import GraphicImage from '@public/images/comparativo_img_CTA.png'
import CreditCard from '@public/images/no-card-dark.webp'
import rating from '@public/images/rating.webp'
import RDStation from '@public/images/selo_RD.png'

// Styled Components
import Image from 'next/image'
import CTAButton from './components/CTAButton'
import CTAContainer from './styles/CTAContainer.styles'
import {
  CTAContentContainer,
  CTAContentCreditCard,
  CTAContentCreditCardParagraph,
  CTAContentRatingParagraph,
  CTAContentStrong,
  CTAContentSubTitle,
  CTAContentTitle,
} from './styles/CTAContent.styles'
import CTAGraphicImage from './styles/CTAGraphicImage.styled'
import CTAButtonContainer from './styles/CTARDStation.styled'

const CallToActionSection = () => {
  return (
    <CTAContainer>
      <CTAGraphicImage
        alt="Comparativo de Leads ganhos com a Leadster comparado a formulário de contato e botão de whatsapp"
        src={GraphicImage}
      />
      <CTAContentContainer>
        <CTAContentTitle>
          Pronto para triplicar sua{' '}
          <CTAContentStrong>Geração de Leads?</CTAContentStrong>
        </CTAContentTitle>
        <CTAContentSubTitle>
          Criação e ativação em <CTAContentStrong>4 minutos.</CTAContentStrong>
        </CTAContentSubTitle>
        <CTAButtonContainer>
          <CTAButton>VER DEMONSTRAÇÃO</CTAButton>
          <Image
            alt="Selo RD Station, top 10 - Apps Mais Usados"
            src={RDStation}
          />
        </CTAButtonContainer>
        <CTAContentCreditCard>
          <Image
            alt="Icone representando que cartão de crédito não é necessario."
            src={CreditCard}
          />
          <CTAContentCreditCardParagraph>
            <CTAContentStrong>Não</CTAContentStrong> é necessário cartão de
            crédito
          </CTAContentCreditCardParagraph>
          <Image alt="4.9 estrelas douradas" src={rating} />
          <CTAContentRatingParagraph>
            4.9/5 média de satisfação
          </CTAContentRatingParagraph>
        </CTAContentCreditCard>
      </CTAContentContainer>
    </CTAContainer>
  )
}

export default CallToActionSection
