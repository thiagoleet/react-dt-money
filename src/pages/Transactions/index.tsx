import { useEffect, useState } from "react";
import { Summary } from "@/components/Summary";
import { Header } from "../../components/Header";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
  TransactionsWrapper,
} from "./styles";
import { SearchForm } from "./components/SearchForm";
import { Transaction } from "@/models/Transaction";

export function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();
    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

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
                    R$ {transaction.price}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </TransactionsWrapper>
  );
}
