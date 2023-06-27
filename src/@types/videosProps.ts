import { IFilterOptions } from './filterOptions'

export interface VideosMenuProps {
  onChangeFilter: (filter: IFilterOptions) => void
}

export interface VideosGridProps {
  filter: IFilterOptions
}

export interface IVideosList {
  id: number
  title: string
  url: string
  description: number
}
