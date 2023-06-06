import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Account, AccountService } from './account.service';

@Component({
  selector: 'app-account-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css'],
})
export class AccountSummaryComponent {
  account = <Account>{};

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.getAccountSummary();
  }

  getAccountSummary() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.accountService
      .getAccount(id)
      .subscribe((account) => (this.account = account));
  }
}
