import { useState } from 'react'

// types
import { IFilterOptions } from '@types'

// Components
import VideosMenu from './components/VideosMenu'

// Styled Components
import VideosGrid from './components/VideosGrid'
import VideosModal from './components/VideosModal'
import VideosSectionContainer from './styles/VideosSectionContainer.styles'
import Pagination from './components/Pagination'

const VideosSection = () => {
  const [filter, setFilter] = useState<IFilterOptions>({
    id: 1,
    name: 'agency',
  })
  const [cardId, setCardId] = useState<number>()
  return (
    <VideosSectionContainer>
      <VideosModal cardId={cardId} filter={filter} />
      <VideosMenu onChangeFilter={setFilter} />
      <VideosGrid filter={filter} onChangeCardId={setCardId} />
      <Pagination />
    </VideosSectionContainer>
  )
}

export default VideosSection
