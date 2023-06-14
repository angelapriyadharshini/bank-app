import { Injectable } from "@angular/core";
import { Transaction } from "../transactions/shared/transaction";

@Injectable()
export class Helper {

  filterByDate(startDate: Date | null, endDate: Date | null, transactions: Transaction[]): Transaction[] {
    return transactions.filter((transaction) => {
      if (startDate !== null && endDate !== null) {
        return (new Date(transaction.transactionDate) >= startDate &&
          new Date(transaction.transactionDate) <= endDate);
      }
      return;
    });
  }

  filterByKeyword(transactions: Transaction[], keyword:string) {
    return transactions.filter((transaction) => {
       if(keyword !== null) {
         return transaction.transactionDescriptions.transactionPartner.toLowerCase().includes(keyword);
       }
       return;
     });
   }
   
}