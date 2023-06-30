import { useState } from 'react'

// Types
import { DropDownProps, IFilterOptions } from '@types'

// Icon
import { BiSolidDownArrow } from 'react-icons/bi'

// Styled Components
import ArrowIcon from './styles/ArrowIcon.styles'
import CustomSelectContainer from './styles/CustomSelectContainer.styles'
import { OptionItem, OptionList } from './styles/OptionList.styles'
import SelectButton from './styles/SelectButton.styles'

// Translation
import { useTranslation } from 'react-i18next'

const DropDown = ({ options }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<IFilterOptions>()

  const {
    t,
    i18n: { language },
  } = useTranslation()

  const toggleSelect = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: IFilterOptions) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <CustomSelectContainer>
      <SelectButton isOpen={isOpen} onClick={toggleSelect}>
        {selectedOption
          ? language === 'pt'
            ? selectedOption.name
            : selectedOption.nameEn
          : `${t('components.dropDown')}`}
        <ArrowIcon isOpen={isOpen}>
          <BiSolidDownArrow />
        </ArrowIcon>
      </SelectButton>
      {isOpen && (
        <OptionList>
          {options.map(option => (
            <OptionItem
              key={option.id}
              onClick={() => handleOptionClick(option)}
            >
              {language === 'pt' ? option.name : option.nameEn}
            </OptionItem>
          ))}
        </OptionList>
      )}
    </CustomSelectContainer>
  )
}

export default DropDown
