import { Injectable } from '@angular/core';
import { ACCOUNTS } from './mock-accounts';
import { Observable, of } from 'rxjs';

export interface Account {
  id: number;
  title: string;
  accountNumber: string;
  accountStatus: string;
  cumulativeBalance: number;
  accountCurrency: string;
}

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  getAccounts(): Observable<Account[]> {
    const accounts = of(ACCOUNTS);
    return accounts;
  }

  getAccount(id: number): Observable<Account> {
    const account = ACCOUNTS.find((account) => account.id === id)!;
    return of(account);
  }
}
