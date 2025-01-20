import { Summary } from "@/components/Summary";
import { Header } from "../../components/Header";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
  TransactionsWrapper,
} from "./styles";
import { SearchForm } from "./components/SearchForm";

export function TransactionsPage() {
  return (
    <TransactionsWrapper>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight $variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight $variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight $variant="outcome">
                  - R$ 12.000,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight $variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight $variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight $variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                -{" "}
                <PriceHighlight $variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight $variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight $variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </TransactionsWrapper>
  );
}
