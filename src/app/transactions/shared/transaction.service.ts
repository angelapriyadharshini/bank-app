import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  // by default returns only the latest 10 transactions from history
  getSavingsTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>('assets/sa-transaction-history.json');
  }

  getCreditCardTransactions() {
    return this.http.get<Transaction[]>('assets/cc-transaction-history.json');
  }
  
}
