import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Button variant="primary" />
      <Button variant="secoundary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />
      <h3>Test</h3>
    </ThemeProvider>
  )
}
