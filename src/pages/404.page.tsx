import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Error404() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.replace('/')
    }, 5000)
  }, [router])
  return (
    <>
      <h1>Erro 404</h1>
    </>
  )
}
