import { Transaction } from "@/models/Transaction";
import { createContext } from "react";

interface TransactionContextType {
  transactions: Transaction[];
}

const TransactionsContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

export default TransactionsContext;
