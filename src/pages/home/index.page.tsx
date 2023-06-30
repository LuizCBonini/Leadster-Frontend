// Components
import { NextHead } from '@components/NextHead'
import CallToActionSection from './components/CallToActionSection'
import VideosSection from './components/VideosSection'
import WelcomeSection from './components/WelcomeSection'

// Sections

export default function Home() {
  return (
    <>
      <NextHead
        description="Na Leadster já geramos Mais de 3.358.452 Leads Qualificados para os nossos clientes! Gere 3x mais Leads Qualificados sem aumentar seu investimento em marketing! Teste agora. 3x mais conversão no site. Aumente sua conversão. Teste grátis por 14 dias."
        metaTitle="Leadster - Ferramenta de Geração de Leads"
        title="Chatbot de Marketing para Aumentar Geração de Leads"
      />
      <WelcomeSection />
      <VideosSection />
      <CallToActionSection />
    </>
  )
}
