import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account, AccountService } from './account.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
