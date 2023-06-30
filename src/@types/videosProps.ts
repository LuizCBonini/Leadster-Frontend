import { IFilterOptions } from './filterOptions'

export interface VideosMenuProps {
  onChangeFilter: (filter: IFilterOptions) => void
}

export interface VideosGridProps {
  filter: IFilterOptions
  onChangeCardId: (cardId: number | undefined) => void
}

export interface IVideosList {
  id: number
  title: string
  titleEn: string
  url: string
  description: number
  descriptionEn: number
}
