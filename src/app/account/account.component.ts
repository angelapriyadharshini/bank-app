import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account, AccountService } from './account.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  accounts: Account[] = [];

  constructor(readonly accountService: AccountService) {}
  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    this.accountService
      .getAccounts()
      .subscribe((accounts) => (this.accounts = accounts));
  }
}
