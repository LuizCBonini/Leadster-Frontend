import { styled } from 'styled-components'

const CTAContainer = styled.div`
  height: 100vh;
  background-color: var(--primary-color-light);
  display: flex;
  column-gap: 5rem;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    background-color: #e6f3ff;
    height: 50rem;
    width: 100rem;
    transform: rotate(45deg);
    position: absolute;
    top: 30rem;
    left: -15rem;
    border-radius: 8rem;
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    /* Estilos para dispositivos laptops */
    flex-direction: column;
    height: fit-content;
  }
`
export default CTAContainer
