import { Transaction } from "@/models/Transaction";
import TransactionsContext, { CreateTransactionInput } from "./context";
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
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });

    setTransactions(data);
  }

  async function createTransaction(data: CreateTransactionInput) {
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
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

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
