import { IFilterOptions } from './filterOptions'

export interface ModalProps {
  isOpen?: boolean
}

export interface VideoComponentProps {
  url?: string
}

export interface VideosModalProps {
  cardId?: number
  filter: IFilterOptions
}
