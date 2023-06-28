import { DownloadButtonProps } from '@types'
import styled from 'styled-components'

export const DownloadButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

export const DownloadButtonContent = styled.div<DownloadButtonProps>`
  border-radius: 0 0.3rem 0.3rem 0;
  padding: 0.5rem;
  color: ${props =>
    props.type === 'xls'
      ? '#00ae7f'
      : props.type === 'doc'
      ? '#0079ec'
      : props.type === 'ppt'
      ? '#a99445'
      : '#858f97'};
  width: min-content;
  font-size: 1rem;
  font-family: var(--plus-jakarta-sans-bold);
  display: flex;
  align-items: center;
  column-gap: 1rem;
  background-color: ${props =>
    props.type === 'xls'
      ? '#c2f4ea'
      : props.type === 'doc'
      ? '#c2e6ff'
      : props.type === 'ppt'
      ? '#fff8d0'
      : '#e8eef3'};
`

export const DownloadButtonIcon = styled.div<DownloadButtonProps>`
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.type === 'xls'
      ? '#9fefdf'
      : props.type === 'doc'
      ? '#a1d9ff'
      : props.type === 'ppt'
      ? '#fff1a0'
      : '#d0dee7'};
  padding: 0.5rem;
  border-radius: 0.3rem 0 0 0.3rem;
  font-size: 1.2rem;
  color: ${props =>
    props.type === 'xls'
      ? '#00ae7f'
      : props.type === 'doc'
      ? '#0079ec'
      : props.type === 'ppt'
      ? '#a99445'
      : '#858f97'};
`
