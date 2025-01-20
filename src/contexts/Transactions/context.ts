import { Transaction } from "@/models/Transaction";
import { createContext } from "react";

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
}

const TransactionsContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

export default TransactionsContext;
