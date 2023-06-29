// Components
import Header from '@components/Header/index'
import WelcomeSection from './components/WelcomeSection'
import VideosSection from './components/VideosSection'

// Sections

export default function Home() {
  return (
    <>
      <Header />
      <WelcomeSection />
      <VideosSection />
    </>
  )
}
