import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { TransactionsPage } from "./pages/Transactions";
import TransactionsProvider from "./contexts/Transactions/provider";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <TransactionsPage />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
