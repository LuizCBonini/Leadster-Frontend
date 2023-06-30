// Components
import Button from '@components/Button'

// Styled Components
import DropDown from '@components/DropDown'
import { AXIOS } from '@libs'
import { IFilterOptions, VideosMenuProps } from '@types'
import { useCallback, useEffect, useState } from 'react'
import VideosMenuCardLabel from './styles/VideosMenuCardLabel.styles'
import VideosMenuContainer from './styles/VideosMenuContainer.styles'
import VideosMenuContent from './styles/VideosMenuContent.styles'
import VideosMenuDropDown from './styles/VideosMenuDropDown.styles'

// Translation
import { useTranslation } from 'react-i18next'

const VideosMenu = ({ onChangeFilter }: VideosMenuProps) => {
  const { t } = useTranslation()
  const [dropDownOptions, setDropDownOptions] = useState<Array<IFilterOptions>>(
    [],
  )
  const [filter, setFilter] = useState<IFilterOptions>({
    id: 1,
    name: 'agency',
  })

  const getDropDownFilters = useCallback(async () => {
    try {
      const { data } = await AXIOS.get('/orderByOptions')
      setDropDownOptions(data)
    } catch (error) {
      console.error('Ocorreu um erro: ', error)
    }
  }, [])

  useEffect(() => {
    getDropDownFilters()
  }, [getDropDownFilters])

  useEffect(() => {
    onChangeFilter(filter)
  }, [filter])

  return (
    <VideosMenuContainer>
      <VideosMenuContent>
        <Button
          isActive={filter.id === 1}
          onClick={() => setFilter({ id: 1, name: 'agency' })}
        >
          {t('videosSection.videosMenu.buttons.agencies')}
        </Button>
        <Button
          isActive={filter.id === 2}
          onClick={() => setFilter({ id: 2, name: 'chatbot' })}
        >
          {t('videosSection.videosMenu.buttons.chatbot')}
        </Button>
        <Button
          isActive={filter.id === 3}
          onClick={() => setFilter({ id: 3, name: 'digitalMarketing' })}
        >
          {t('videosSection.videosMenu.buttons.digitalMarketing')}
        </Button>
        <Button
          isActive={filter.id === 4}
          onClick={() => setFilter({ id: 4, name: 'leadsGeneration' })}
        >
          {t('videosSection.videosMenu.buttons.leadGeneration')}
        </Button>
        <Button
          isActive={filter.id === 5}
          onClick={() => setFilter({ id: 5, name: 'paidMedia' })}
        >
          {t('videosSection.videosMenu.buttons.paidMedia')}
        </Button>
        <VideosMenuDropDown>
          <VideosMenuCardLabel>
            {t('videosSection.videosMenu.dropDownLabel')}
          </VideosMenuCardLabel>
          <DropDown options={dropDownOptions} />
        </VideosMenuDropDown>
      </VideosMenuContent>
    </VideosMenuContainer>
  )
}

export default VideosMenu
