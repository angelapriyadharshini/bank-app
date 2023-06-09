import { Injectable } from '@angular/core';
import { ACCOUNTS } from './mock-accounts';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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
  constructor(private http: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>('assets/accounts.json');
  }

  getAccount(id: number): Observable<Account> {
    return this.http.get<Account[]>('assets/accounts.json').pipe(
      map((accs: any) => {
        return accs.find((a: Account) => a.id === id);
      })
    );
  }
}
