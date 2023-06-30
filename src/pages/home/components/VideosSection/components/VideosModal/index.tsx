import { useEffect, useMemo, useState } from 'react'

// Libs
import { AXIOS } from '@libs'

// Types
import { IVideosList, VideosModalProps } from '@types'

// Components
import DownloadButton from '@components/DownloadButton'
import VideosModalVideoComponent from './components/VideoComponent'

// Styled Components
import VideosModalCloseIcon from './styles/VideosModalCloseIcon.styles'
import {
  VideosModalContainer,
  VideosModalContainerShadow,
} from './styles/VideosModalContainer.styles'
import {
  VideosModalDescriptionButtons,
  VideosModalDescriptionContainer,
  VideosModalDescriptionContent,
  VideosModalDescriptionTitle,
} from './styles/VideosModalDescription.styles'
import {
  VideosModalTitle,
  VideosModalTitleType,
} from './styles/VideosModalTitle.styles'

// Translation
import { useTranslation } from 'react-i18next'

const VideosModal = ({ cardId, filter }: VideosModalProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation()
  const [openModal, setOpenModal] = useState(false)
  const [response, setResponse] = useState<IVideosList>()

  useMemo(async () => {
    try {
      const { data } = await AXIOS.get(`/videos/${filter.id}`)
      // Função para filtrar com base no ID
      const filterById = data[filter.name].find(
        (item: IVideosList) => item.id === cardId,
      )
      setResponse(filterById)
    } catch (error) {
      console.error('Ocorreu um erro: ', error)
    }
  }, [cardId])

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    cardId !== undefined && setOpenModal(true)
  }, [cardId])

  return (
    <>
      <VideosModalContainerShadow
        isOpen={openModal}
        onClick={() => handleCloseModal()}
      />
      <VideosModalContainer isOpen={openModal}>
        <VideosModalCloseIcon onClick={() => handleCloseModal()} />
        <VideosModalTitle>
          <VideosModalTitleType>Webinar:</VideosModalTitleType>
          {language === 'pt' ? response?.title : response?.titleEn}
        </VideosModalTitle>
        <VideosModalVideoComponent url={response?.url} />
        <VideosModalDescriptionContainer>
          <VideosModalDescriptionTitle>
            {t('videosSection.videosModal.descriptionTitle')}
          </VideosModalDescriptionTitle>
          <VideosModalDescriptionContent>
            {language === 'pt'
              ? response?.description
              : response?.descriptionEn}
          </VideosModalDescriptionContent>
        </VideosModalDescriptionContainer>

        <VideosModalDescriptionContainer>
          <VideosModalDescriptionTitle>
            {t('videosSection.videosModal.downloadTitle')}
          </VideosModalDescriptionTitle>
          <VideosModalDescriptionButtons>
            <DownloadButton name="Spreadsheet" type="xls" />
            <DownloadButton name="Document" type="doc" />
            <DownloadButton name="Presentation" type="ppt" />
          </VideosModalDescriptionButtons>
        </VideosModalDescriptionContainer>
      </VideosModalContainer>
    </>
  )
}

export default VideosModal
