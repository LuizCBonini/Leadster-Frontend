import { VideoComponentProps } from '@types'
import YouTube from 'react-youtube'

const VideosModalVideoComponent = ({ url }: VideoComponentProps) => {
  // Função para obter o ID do vídeo do YouTube a partir da URL
  const getVideoIdFromUrl = (url: string) => {
    try {
      const id = url.split('/').pop()
      return id
    } catch (error) {
      console.error('Invalid YouTube URL:', error)
      return undefined
    }
  }

  return url !== undefined ? (
    <div>
      <YouTube
        opts={{ width: '100%', height: '200rem' }}
        videoId={getVideoIdFromUrl(url)}
      />
    </div>
  ) : null
}

export default VideosModalVideoComponent
