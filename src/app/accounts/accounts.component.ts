import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountService } from './shared/account.service';
import { Account } from './shared/account';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-account',
  standalone: true,
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class AccountsComponent {
  accounts: Account[] = [];

  constructor(readonly accountService: AccountService) {}
  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    this.accountService.getAccounts().subscribe({
      next: (accounts) => {
        // loading - false
        this.accounts = accounts;
      },
      error: (err) => {
        //  loading - false
      },
    });
  }
}
