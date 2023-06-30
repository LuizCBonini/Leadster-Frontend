import GlobalStyle from '@theme/globals'
import { ReactNode } from 'react'
import '../../i18n'

interface IAppContainer {
  children: ReactNode
}

export default function AppContainer({ children }: IAppContainer) {
  return (
    <div>
      <GlobalStyle />
      {children}
    </div>
  )
}
