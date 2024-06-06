import {Transaction} from "./transaction";

export interface Category {
  id?: number,
  name: string,
  transactions: Transaction[],
}
