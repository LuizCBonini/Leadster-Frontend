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

const WelcomeSection = () => {
  return (
    <HomeContainer id="home">
      <TitleTag>webinars exclusivos</TitleTag>
      <SubTitle>Menos Conversinha,</SubTitle>
      <TitleContainer>
        <ImageAsset
          alt="Três linhas em azul claro que enfeitam o titulo."
          src={assetHeader}
        />
        <Title>Mais Conversão</Title>
      </TitleContainer>
      <Slogan>
        Conheça as estratégias que{' '}
        <BoldLetterSlogan>mudaram o jogo</BoldLetterSlogan> e como aplicá-las no
        seu negócio
      </Slogan>
    </HomeContainer>
  )
}

export default WelcomeSection
