import { createGlobalStyle } from "styled-components"
import { fadeIn } from "./animations/fadeIn"

export const GlobalStyles = createGlobalStyle`
   html, body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   p {
      animation: ${fadeIn} 1000ms ease-in;
   }
`