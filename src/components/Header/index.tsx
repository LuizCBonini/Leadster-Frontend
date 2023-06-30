// Images
import logo from '@public/images/logo.png'

// Components
import Image from 'next/image'

// Styled Components
import HeaderContainer from './styles/HeaderContainer.styles'
import HeaderLanguageButton from './styles/HeaderLanguageButton.styles'
import { HiTranslate } from 'react-icons/hi'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation()

  const [currentLanguage, setCurrentLanguage] = useState(language)

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }
  return (
    <HeaderContainer>
      <Image alt={t('components.header.headerLogoAlt')} src={logo} />
      <HeaderLanguageButton onClick={handleChangeLanguage}>
        <HiTranslate />
      </HeaderLanguageButton>
    </HeaderContainer>
  )
}

export default Header
