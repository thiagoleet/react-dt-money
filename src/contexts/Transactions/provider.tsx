import { Transaction } from "@/models/Transaction";
import TransactionsContext from "./context";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

interface TransactionsProviderProps {
  children: React.ReactNode;
}

function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const { data } = await api.get<Transaction[]>("/transactions", {
      params: {
        q: query,
      },
    });

    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsProvider;
