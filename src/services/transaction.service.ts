import { api } from "./api";
import { Transaction } from "@/models";

class TransactionService {
  async fetchAllTransactions(): Promise<Transaction[]> {
    const { data } = await api.get("transactions");

    return data;
  }
}

export const transactionService = new TransactionService();
