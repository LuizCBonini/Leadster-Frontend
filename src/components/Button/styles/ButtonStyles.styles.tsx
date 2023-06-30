import styled from 'styled-components'

interface ButtonProps {
  isActive?: boolean
}

const ButtonStyle = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: 2rem;
  padding: 0.5rem 1.5rem;
  font-family: var(--plus-jakarta-sans-medium);
  border: 0.1rem
    ${props =>
      props.isActive ? 'var(--primary-color)' : 'var(--font-default-color)'}
    solid;
  background-color: ${props =>
    props.isActive ? 'var(--primary-color)' : '#fff'};
  color: ${props => (props.isActive ? '#fff' : 'var(--font-default-color)')};
  transition: 200ms ease-in-out;

  &:hover {
    border: 0.1rem var(--primary-color) solid;
    color: ${props => (props.isActive ? '#fff' : 'var(--primary-color)')};
    background-color: ${props => props.isActive && 'var(--primary-color-dark)'};
    transition: 200ms ease-in-out;
  }

  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    /* Estilos para dispositivos laptops */
    font-size: 1.2rem;
  }
`

export default ButtonStyle
