// Components
import Button from '@components/Button'

// Styled Components
import DropDown from '@components/DropDown'
import { AXIOS } from '@libs'
import { IFilterOptions } from '@types'
import { useCallback, useEffect, useState } from 'react'
import VideosMenuCardLabel from './styles/VideosMenuCardLabel.styles'
import VideosMenuContainer from './styles/VideosMenuContainer.styles'
import VideosMenuContent from './styles/VideosMenuContent.styles'
import VideosMenuDropDown from './styles/VideosMenuDropDown.styles'

const VideosMenu = () => {
  const [dropDownOptions, setDropDownOptions] = useState<Array<IFilterOptions>>(
    [],
  )

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

  return (
    <VideosMenuContainer>
      <VideosMenuContent>
        <Button>Agências</Button>
        <Button>Chatbot</Button>
        <Button>Marketing Digital</Button>
        <Button>Geração de Leads</Button>
        <Button>Mídia Paga</Button>
        <VideosMenuDropDown>
          <VideosMenuCardLabel>Ordenar por</VideosMenuCardLabel>
          <DropDown options={dropDownOptions} />
        </VideosMenuDropDown>
      </VideosMenuContent>
    </VideosMenuContainer>
  )
}

export default VideosMenu
