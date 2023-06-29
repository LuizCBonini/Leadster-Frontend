import { FaPlay } from 'react-icons/fa'
import CardContainer from './styles/CardContainer.styles'
import CardIcon from './styles/CardIcon.styles'
import CardImage from './styles/CardImage.styles'
import CardTitle from './styles/CardTitle.styles'
import { CardProps } from '@types'

const Card = ({ thumb, title, onClick }: CardProps) => {
  return (
    <CardContainer onClick={onClick}>
      <CardImage alt="Thumbnail do video" src={thumb} />
      <CardIcon>
        <FaPlay />
      </CardIcon>
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  )
}

export default Card
