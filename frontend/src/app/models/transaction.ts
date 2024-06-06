import {Account} from "./account";
import {Category} from "./category";

export interface Transaction {
  id?: number,
  date: Date,
  amount: number,
  description: string,
  recurring: boolean,
  category: Category,
  account: Account
}
