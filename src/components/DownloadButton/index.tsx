import { DownloadButtonProps } from '@types'
import { HiOutlineCloudDownload } from 'react-icons/hi'
import {
  DownloadButtonContainer,
  DownloadButtonContent,
  DownloadButtonIcon,
} from './styles/DownloadButtonStyles.styles'

const DownloadButton = ({ name, type }: DownloadButtonProps) => {
  return (
    <DownloadButtonContainer>
      <DownloadButtonIcon type={type}>
        <HiOutlineCloudDownload />
      </DownloadButtonIcon>
      <DownloadButtonContent type={type}>
        {name}.{type}
      </DownloadButtonContent>
    </DownloadButtonContainer>
  )
}

export default DownloadButton
