import "styled-components" // importante, pois se fosse usar o declare module sem isso, sobrescreveria toda a tipagem
import { defaultTheme } from "../styles/themes/default"

type ThemeType = typeof defaultTheme

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}