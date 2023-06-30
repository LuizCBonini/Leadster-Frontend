import { styled } from 'styled-components'

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  column-gap: 2rem;
  padding-bottom: 5rem;
  @media screen and (max-width: 768px) {
    /* Estilos para dispositivos laptops */
    flex-direction: column;
  }
`

export const FooterLinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  min-width: 20rem;
`

export const FooterLinksTitle = styled.p`
  font-family: var(--plus-jakarta-sans-semibold);
  margin-bottom: 4rem;
  @media screen and (max-width: 768px) {
    /* Estilos para dispositivos laptops */
    margin-bottom: 0;
    margin-top: 2rem;
    font-size: 1.6rem;
  }
`

export const FooterLinks = styled.a`
  font-size: var(--plus-jakarta-sans-semibold);
  color: var(--font-footer-link-color);
  cursor: pointer;
  font-size: 1.5rem;
  text-decoration: none;
  &:hover {
    color: var(--primary-color);
  }
`

export const FooterLinkStrongParagraph = styled.span`
  color: var(--font-default-color);
  font-size: 1.4rem;
`

export const FooterLinkParagraph = styled.p`
  color: var(--font-footer-link-color);
  font-size: 1.4rem;
`

export const FooterLinksSocialMediaContainer = styled.div`
  display: flex;
  column-gap: 1rem;
`

export const FooterLinksSocialMedia = styled.a`
  border-radius: 50%;
  background-color: var(--primary-color-light);
  padding: 1rem 1.3rem;
  color: var(--font-footer-link-color);
  transition: 300ms ease;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: var(--primary-color);
  }
  @media screen and (max-width: 425px) {
    /* Estilos para dispositivos móveis grandes */
    padding: 1.5rem 1.9rem;
    font-size: 1.6rem;
  }
`
