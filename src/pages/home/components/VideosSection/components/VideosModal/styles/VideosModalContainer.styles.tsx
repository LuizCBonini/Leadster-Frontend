import { ModalProps } from '@types'
import { keyframes, styled } from 'styled-components'

const hideAnimation = keyframes`
  from {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: translate(-50%, 50%);
    opacity: 0;
  }
`
const showAnimation = keyframes`
  from {
    transform: translate(-50%, 50%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`

export const VideosModalContainer = styled.div<ModalProps>`
  width: 35%;
  height: min-content;
  border-radius: 1.5rem;
  z-index: 3;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  animation: ${props => (props.isOpen ? showAnimation : hideAnimation)} 1s
    ease-in-out forwards;
  overflow: hidden;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  &::before {
    content: '';
    width: 100%;
    height: 0.4rem;
    background-color: var(--primary-color);
    position: absolute;
  }

  @media screen and (max-width: 768px) {
    /* Estilos para laptops */
    width: 70%;
  }

  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    width: 90%;
  }
`

export const VideosModalContainerShadow = styled.div<ModalProps>`
  background-color: #333333b0;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`
