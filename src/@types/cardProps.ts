import { StaticImageData } from 'next/image'

export interface CardProps {
  thumb: StaticImageData
  title: string
  onClick: () => void
}
