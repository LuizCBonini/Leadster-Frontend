import {
  AddressParagraph,
  CopyrightContainer,
  CopyrightLeadster,
  CopyrightParagraph,
} from './styles/CopyrightStyles.styles'

// Translation
import { useTranslation } from 'react-i18next'

const Copyright = () => {
  const { t } = useTranslation()
  return (
    <CopyrightContainer>
      <CopyrightParagraph>
        Copright © 2015 - 2023 {t('components.Footer.copright')} |{' '}
        <CopyrightLeadster href="https://leadster.com.br" target="_blanc">
          Leadster
        </CopyrightLeadster>
      </CopyrightParagraph>
      <AddressParagraph>
        Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |{' '}
        {t('components.Footer.terms')}
      </AddressParagraph>
    </CopyrightContainer>
  )
}

export default Copyright
