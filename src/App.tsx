import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <h1>App</h1>
      </div>
    </ThemeProvider>
  );
}
