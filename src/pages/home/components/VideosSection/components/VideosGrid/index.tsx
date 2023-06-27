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

const VideosGrid = ({ filter }: VideosGridProps) => {
  const [videosList, setVideosList] = useState<Array<IVideosList>>([])

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

  return (
    <VideosGridContainer>
      {videosList?.map(video => (
        <Card key={video.id} thumb={thumb} title={video.title} />
      ))}
    </VideosGridContainer>
  )
}

export default VideosGrid