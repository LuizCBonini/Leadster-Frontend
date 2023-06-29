import { ReactNode } from 'react'

export interface ButtonProps {
  isActive?: boolean
  children: ReactNode
  onClick?: () => void
}
