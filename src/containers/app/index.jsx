import { GlobalStyles } from '@theme/globals'
import '../../i18n'

const AppContainer = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      {children}
    </div>
  )
}

export default AppContainer
