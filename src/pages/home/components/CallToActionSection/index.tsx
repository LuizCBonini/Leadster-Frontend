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

// Translation
import { useTranslation } from 'react-i18next'

const CallToActionSection = () => {
  const { t } = useTranslation()
  return (
    <CTAContainer>
      <CTAGraphicImage
        alt={t('callToAction.graphicsImgAlt')}
        src={GraphicImage}
      />
      <CTAContentContainer>
        <CTAContentTitle>
          {t('callToAction.title.part1')}{' '}
          <CTAContentStrong>{t('callToAction.title.part2')}</CTAContentStrong>
        </CTAContentTitle>
        <CTAContentSubTitle>
          {t('callToAction.subTitle.part1')}{' '}
          <CTAContentStrong>
            {t('callToAction.subTitle.part2')}
          </CTAContentStrong>
        </CTAContentSubTitle>
        <CTAButtonContainer>
          <CTAButton>{t('callToAction.button')}</CTAButton>
          <Image alt={t('callToAction.RdSeal')} src={RDStation} />
        </CTAButtonContainer>
        <CTAContentCreditCard>
          <Image alt={t('callToAction.cardIcon')} src={CreditCard} />
          <CTAContentCreditCardParagraph>
            <CTAContentStrong>
              {t('callToAction.cardParagraph.part1')}
            </CTAContentStrong>{' '}
            {t('callToAction.cardParagraph.part2')}
          </CTAContentCreditCardParagraph>
          <Image alt={t('callToAction.starsAlt')} src={rating} />
          <CTAContentRatingParagraph>
            {t('callToAction.starsParagraph')}
          </CTAContentRatingParagraph>
        </CTAContentCreditCard>
      </CTAContentContainer>
    </CTAContainer>
  )
}

export default CallToActionSection
