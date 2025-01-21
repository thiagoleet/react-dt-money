import { useCallback, useEffect, useState } from "react";
import { Transaction } from "@/models/Transaction";
import { api } from "@/lib/axios";
import TransactionsContext, { CreateTransactionInput } from "./context";

interface TransactionsProviderProps {
  children: React.ReactNode;
}

function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const { data } = await api.get<Transaction[]>("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });

    setTransactions(data);
  }, []);

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      try {
        const { description, price, category, type } = data;

        const response = await api.post("/transactions", {
          id: crypto.randomUUID(),
          description,
          price,
          category,
          type,
          createdAt: new Date(),
        });

        setTransactions((prev) => [response.data, ...prev]);
      } catch (error) {
        console.error(error);

        throw error;
      }
    },
    []
  );

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsProvider;
