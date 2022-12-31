// Types for data that components use/accept as props
import { MouseEvent } from 'react'

export interface Action {
  label: string
  onClick: (ev?: MouseEvent) => void
}