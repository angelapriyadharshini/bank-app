import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { Account } from '../shared/account';
import { TransactionsComponent } from 'src/app/transactions/transactions.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-account-summary',
  standalone: true,
  imports: [CommonModule, TransactionsComponent, MatCardModule],
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css'],
})
export class AccountSummaryComponent {
  account = <Account>{};
  isSavings = false;
  isTransactionsLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.getAccountSummary();
  }

  getAccountSummary() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.accountService.getAccounts().subscribe({
      next: (accounts: Account[]) => {
        //  loading - false
        this.account = accounts.filter((account) => account.id === id)[0];
        this.isSavings = this.account.accountType === 'SA' ? true : false;
        this.isTransactionsLoaded = true;
      },
      error: () => {
        //  loading - false
      },
    });
  }
}
