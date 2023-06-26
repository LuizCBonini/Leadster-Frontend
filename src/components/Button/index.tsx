import { ReactNode } from 'react'
import ButtonStyle from './styles/ButtonStyles.styles'

interface ButtonProps {
  isActive?: boolean
  children: ReactNode
  onClick?: () => void
}

const Button = ({ isActive, children, onClick }: ButtonProps) => {
  return (
    <ButtonStyle isActive={isActive} onClick={onClick}>
      {children}
    </ButtonStyle>
  )
}

export default Button
