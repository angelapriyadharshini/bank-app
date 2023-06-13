import { Component, Input } from '@angular/core';
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
    // this.accountId = id;
    this.accountService.getAccount(id).subscribe({
      next: (account) => {
        //  loading - false
        console.log('Account Id', account.accountType);
        this.isSavings = account.accountType === 'SA' ? true : false;
        console.log('isSavings', this.isSavings);
        this.isTransactionsLoaded = true;
        this.account = account;
      },
      error: () => {
        //  loading - false
      },
    });
  }
}
