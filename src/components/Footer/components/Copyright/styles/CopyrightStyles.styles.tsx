import { styled } from 'styled-components'

export const CopyrightContainer = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: relative;
  &::before {
    content: '';
    width: 100%;
    height: 0.1rem;
    position: absolute;
    background-color: #bebebe;
    top: 0;
    left: 0;
  }
`

export const CopyrightParagraph = styled.p`
  font-size: 1.2rem;
`

export const CopyrightLeadster = styled.a`
  color: var(--primary-color);
  text-decoration: none;
`

export const AddressParagraph = styled.p`
  color: var(--font-footer-link-color);
  font-size: 1.2rem;
`
