import { Transaction } from "@/models/Transaction";
import TransactionsContext from "./context";
import { useEffect, useState } from "react";

interface TransactionsProviderProps {
  children: React.ReactNode;
}

function TransactionsProvider({ children }: TransactionsProviderProps) {
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
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsProvider;
