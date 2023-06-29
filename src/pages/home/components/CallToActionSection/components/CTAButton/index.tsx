// Types
import { ButtonProps } from '@types'

// Styled Components
import CTAButtonStyles from './styles/CTAButtonStyles.styles'

const CTAButton = ({ children }: ButtonProps) => {
  return <CTAButtonStyles>{children}</CTAButtonStyles>
}

export default CTAButton
