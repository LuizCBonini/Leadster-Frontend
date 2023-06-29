import {
  AddressParagraph,
  CopyrightContainer,
  CopyrightLeadster,
  CopyrightParagraph,
} from './styles/CopyrightStyles.styles'

const Copyright = () => {
  return (
    <CopyrightContainer>
      <CopyrightParagraph>
        Copright © 2015 - 2023 Todos os direitos reservados |{' '}
        <CopyrightLeadster href="https://leadster.com.br" target="_blanc">
          Leadster
        </CopyrightLeadster>
      </CopyrightParagraph>
      <AddressParagraph>
        Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos
        de uso
      </AddressParagraph>
    </CopyrightContainer>
  )
}

export default Copyright
