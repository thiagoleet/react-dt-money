import { Transaction } from "@/models/Transaction";
import { createContext } from "react";

export interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}

export interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

export default TransactionsContext;
