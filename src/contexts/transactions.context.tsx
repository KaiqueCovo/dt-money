import { createContext, ReactNode, useEffect, useState } from 'react';

import { Transaction } from '@/models';
import { transactionService, CreateTransactionDTO } from '@/services';

interface TransactionsContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => void;
  createTransaction: (data: CreateTransactionDTO) => void;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const transactions = await transactionService.fetchAllTransactions(query);

    setTransactions(transactions);
  }

  async function createTransaction(data: CreateTransactionDTO) {
    const newTransaction = await transactionService.createTransaction(data);

    setTransactions((state) => [...state, newTransaction]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
