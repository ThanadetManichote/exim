import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'KanitLight';
  font-display: swap;
  src: local('KanitLight'),
    url('/static/fonts/Kanit/KanitLight.eot'),
    url('/static/fonts/Kanit/KanitLight.eot') format('embedded-opentype'),
    url('/static/fonts/Kanit/KanitLight.woff2') format('woff2'),
    url('/static/fonts/Kanit/KanitLight.woff') format('woff'),
    url('/static/fonts/Kanit/KanitLight.ttf') format('truetype'),
    url('/static/fonts/Kanit/KanitLight.svg#KanitLight') format('svg');
  font-weight: normal;
  font-style: normal;
}
`