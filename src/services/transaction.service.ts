import { Transaction } from '@/models';

import { api } from './api';

export interface CreateTransactionDTO {
  description: string;
  category: string;
  price: number;
  type: 'income' | 'outcome';
}

class TransactionService {
  async fetchAllTransactions(query?: string): Promise<Transaction[]> {
    const { data } = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    });

    return data;
  }

  async createTransaction(
    transaction: CreateTransactionDTO
  ): Promise<Transaction> {
    const { data } = await api.post('transactions', {
      ...transaction,
      createdAt: new Date(),
    });

    return data;
  }
}

export const transactionService = new TransactionService();
