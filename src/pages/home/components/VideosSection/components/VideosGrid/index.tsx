import { useCallback, useEffect, useState } from 'react'
// components
import Card from '@components/Card'

// styled components
import VideosGridContainer from './styles/VideosGridContainer.styles'

// libs
import { AXIOS } from '@libs'

// types
import { IVideosList, VideosGridProps } from '@types'

// Imagens
import thumb from '@public/images/thumbnail.png'

// Translation
import { useTranslation } from 'react-i18next'

const VideosGrid = ({ filter, onChangeCardId }: VideosGridProps) => {
  const {
    i18n: { language },
  } = useTranslation()
  const [videosList, setVideosList] = useState<Array<IVideosList>>([])
  const [cardId, setCardId] = useState<number | undefined>()
  const [windowWidth, setWindowWidth] = useState<number>(768)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getVideos = useCallback(async () => {
    try {
      const { data } = await AXIOS.get(`videos/${filter.id}`)
      setVideosList(data[filter.name])
    } catch (error) {
      console.error('Ocorreu um erro: ', error)
    }
  }, [filter])

  useEffect(() => {
    getVideos()
  }, [getVideos])

  useEffect(() => {
    onChangeCardId(cardId)
  }, [cardId])

  return (
    <VideosGridContainer>
      {windowWidth > 768
        ? videosList?.map(video => (
            <Card
              key={video.id}
              onClick={() => setCardId(video.id)}
              thumb={thumb}
              title={language === 'pt' ? video.title : video.titleEn}
            />
          ))
        : windowWidth > 425
        ? videosList
            ?.slice(0, 6)
            .map(video => (
              <Card
                key={video.id}
                onClick={() => setCardId(video.id)}
                thumb={thumb}
                title={language === 'pt' ? video.title : video.titleEn}
              />
            ))
        : videosList
            ?.slice(0, 3)
            .map(video => (
              <Card
                key={video.id}
                onClick={() => setCardId(video.id)}
                thumb={thumb}
                title={language === 'pt' ? video.title : video.titleEn}
              />
            ))}
    </VideosGridContainer>
  )
}

export default VideosGrid
