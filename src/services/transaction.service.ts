import { api } from "./api";
import { Transaction } from "@/models";

class TransactionService {
  async fetchAllTransactions(query?: string): Promise<Transaction[]> {
    const { data } = await api.get("transactions", {
      params: {
        q: query,
      },
    });

    return data;
  }
}

export const transactionService = new TransactionService();
