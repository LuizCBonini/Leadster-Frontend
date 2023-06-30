import { useState } from 'react'

// styled components
import PaginationButton from './styles/PaginationButton.styles'
import PaginationButtonContainer from './styles/PaginationButtonContainer.styles'
import PaginationContainer from './styles/PaginationContainer.styles'
import PaginationContent from './styles/PaginationContent.styles'

// Translation
import { useTranslation } from 'react-i18next'

const Pagination = () => {
  const { t } = useTranslation()
  const [pagination, setPagination] = useState(3)
  return (
    <PaginationContainer>
      <PaginationContent>
        {t('videosSection.page')}
        <PaginationButtonContainer>
          <PaginationButton
            isActive={pagination === 1}
            onClick={() => setPagination(1)}
          >
            1
          </PaginationButton>
          <PaginationButton
            isActive={pagination === 2}
            onClick={() => setPagination(2)}
          >
            2
          </PaginationButton>
          <PaginationButton
            isActive={pagination === 3}
            onClick={() => setPagination(3)}
          >
            3
          </PaginationButton>
          <PaginationButton
            isActive={pagination === 4}
            onClick={() => setPagination(4)}
          >
            4
          </PaginationButton>
        </PaginationButtonContainer>
      </PaginationContent>
    </PaginationContainer>
  )
}

export default Pagination
