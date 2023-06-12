import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from './shared/transaction.service';
import { Transaction } from './shared/transaction';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent {
  constructor(private transactionService: TransactionService) {}
  ngOnInit() {
    this.getInitialTransactions();
}

  getInitialTransactions() {
    this.transactionService.getSavingsTransactions().subscribe({
      next: (trans) => {
        this.transactions = trans.slice(0, 10);
        console.log(this.transactions);
        this.dataSource = this.transactions;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
