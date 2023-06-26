import GlobalStyle from '@theme/globals'
import { ReactNode } from 'react'

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
