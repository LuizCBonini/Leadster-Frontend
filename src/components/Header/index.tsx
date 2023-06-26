// Images
import logo from '@public/images/logo.png'

// Components
import Image from 'next/image'

// Styled Components
import HeaderContainer from './styles/HeaderContainer.styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Image alt="Logo da Leadster" src={logo} />
    </HeaderContainer>
  )
}

export default Header
