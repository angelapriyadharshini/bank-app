import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Account } from './account';

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
      map((accounts: any) => {
        return accounts.find((account: Account) => account.id === id);
      })
    );
  }
}
