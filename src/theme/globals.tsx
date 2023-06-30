import { createGlobalStyle } from 'styled-components'

const fontFaces = {
  PlusJakartaSansBold: '/fonts/PlusJakartaSans-Bold.ttf',
  PlusJakartaSansBoldItalic: '/fonts/PlusJakartaSans-BoldItalic.ttf',
  PlusJakartaSansExtraBold: '/fonts/PlusJakartaSans-ExtraBold.ttf',
  PlusJakartaSansExtraBoldItalic: '/fonts/PlusJakartaSans-ExtraBoldItalic.ttf',
  PlusJakartaSansExtraLight: '/fonts/PlusJakartaSans-ExtraLight.ttf',
  PlusJakartaSansExtraLightItalic:
    '/fonts/PlusJakartaSans-ExtraLightItalic.ttf',
  PlusJakartaSansItalic: '/fonts/PlusJakartaSans-Italic.ttf',
  PlusJakartaSansLight: '/fonts/PlusJakartaSans-Light.ttf',
  PlusJakartaSansLightItalic: '/fonts/PlusJakartaSans-LightItalic.ttf',
  PlusJakartaSansMedium: '/fonts/PlusJakartaSans-Medium.ttf',
  PlusJakartaSansMediumItalic: '/fonts/PlusJakartaSans-MediumItalic.ttf',
  PlusJakartaSansRegular: '/fonts/PlusJakartaSans-Regular.ttf',
  PlusJakartaSansSemiBold: '/fonts/PlusJakartaSans-SemiBold.ttf',
  PlusJakartaSansSemiBoldItalic: '/fonts/PlusJakartaSans-SemiBoldItalic.ttf',
}

export const GlobalStyles = createGlobalStyle`
  :root {
    /* ====== declarando variáveis ======*/
    /* Fonts */
    --plus-jakarta-sans-bold-italic: 'PlusJakartaSansBoldItalic';
    --plus-jakarta-sans-extra-bold: 'PlusJakartaSansExtraBold';
    --plus-jakarta-sans-bold: 'PlusJakartaSansBold';
    --plus-jakarta-sans-extra-light: 'PlusJakartaSansExtraLight';
    --plus-jakarta-sans-extra-light-italic: 'PlusJakartaSansExtraLightItalic';
    --plus-jakarta-sans-italic: 'PlusJakartaSansItalic';
    --plus-jakarta-sans-light: 'PlusJakartaSansLight';
    --plus-jakarta-sans-light-italic: 'PlusJakartaSansLightItalic';
    --plus-jakarta-sans-medium: 'PlusJakartaSansMedium';
    --plus-jakarta-sans-medium-italic: 'PlusJakartaSansMediumItalic';
    --plus-jakarta-sans-regular: 'PlusJakartaSansRegular';
    --plus-jakarta-sans-semibold: 'PlusJakartaSansSemiBold';
    --plus-jakarta-sans-semibold-italic: 'PlusJakartaSansSemiBoldItalic';

    /* Colors */
    --primary-color: #2c83fb;
    --primary-color-dark: #1f76f0;
    --primary-color-light: #f0f8ff;
    --font-default-color: #1c3c50;
    --font-footer-link-color: #677294;
  }

  /* Fonts */
  ${Object.entries(fontFaces).map(
    ([fontName, fontSrc]) => `
    @font-face {
      font-family: '${fontName}';
      src: url('${fontSrc}') format('opentype');
    }
  `,
  )}

  /* Estilos globais */
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    /* 1rem = 10px */
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    color: var(--font-default-color);
    background-color: #ffffff;
    font-family: var(--plus-jakarta-sans-regular);
    font-size: 1.6rem;
    @media screen and (max-width: 425px) {
      /* Estilos para dispositivos móveis grandes */
      font-size: 0.5rem;
    }
  }
`
