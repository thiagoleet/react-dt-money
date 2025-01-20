import { Summary } from "@/components/Summary";
import { Header } from "@/components/Header";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
  TransactionsWrapper,
} from "./styles";
import { SearchForm } from "./components/SearchForm";
import TransactionsContext from "@/contexts/Transactions/context";
import { dateFormatter, priceFormatter } from "@/utils/formatter";
import { useContextSelector } from "use-context-selector";

export function TransactionsPage() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  return (
    <TransactionsWrapper>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="40%">{transaction.description}</td>
                <td>
                  <PriceHighlight $variant={transaction.type}>
                    {transaction.type === "outcome" && "-"}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </TransactionsWrapper>
  );
}
