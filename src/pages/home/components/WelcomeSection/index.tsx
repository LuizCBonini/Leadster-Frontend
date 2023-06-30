// Images
import assetHeader from '@public/images/asset-header.png'

// Styled Componentes
import HomeContainer from './styles/HomeContainer.styles'
import ImageAsset from './styles/ImageAsset.styles'
import { BoldLetterSlogan, Slogan } from './styles/Slogan.styles'
import SubTitle from './styles/SubTitle.styles'
import Title from './styles/Title.styles'
import TitleContainer from './styles/TitleContainer.styles'
import TitleTag from './styles/TitleTag.styles'

// Translation
import { useTranslation } from 'react-i18next'

const WelcomeSection = () => {
  const { t } = useTranslation()
  return (
    <HomeContainer id="home">
      <TitleTag>{t('welcome.tag')}</TitleTag>
      <SubTitle>{t('welcome.subTitle')}</SubTitle>
      <TitleContainer>
        <ImageAsset alt={t('welcome.imageAssetAlt')} src={assetHeader} />
        <Title>{t('welcome.title')}</Title>
      </TitleContainer>
      <Slogan>
        {t('welcome.slogan.part1')}{' '}
        <BoldLetterSlogan>{t('welcome.slogan.part2')}</BoldLetterSlogan>{' '}
        {t('welcome.slogan.part3')}
      </Slogan>
    </HomeContainer>
  )
}

export default WelcomeSection
