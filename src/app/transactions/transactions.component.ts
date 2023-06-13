import { Component } from '@angular/core';
import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { TransactionService } from './shared/transaction.service';
import { Transaction } from './shared/transaction';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    JsonPipe,
    MatNativeDateModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent {
  transactions: Transaction[] = [];
  transactionTableHeaders: string[] = [
    'transactionDate',
    'transactionPartner',
    'transactionAmount',
    'cumulativeBalance',
  ];
  dataSource: Transaction[] = [];
  transactionHistoryForm = new FormGroup({
    start: new FormControl<Date | null>(null, Validators.required),
    end: new FormControl<Date | null>(null, Validators.required),
    keyword: new FormControl(''),
  });
  panelOpenState = false;

  constructor(private transactionService: TransactionService) {}
  ngOnInit() {
    this.getInitialTransactions();
  }
  onSubmit() {
    console.log(this.transactionHistoryForm);
    console.log(this.transactionHistoryForm.value);
    console.log(this.transactionHistoryForm.valid);
  }

  getInitialTransactions() {
    this.transactionService.getSavingsTransactions().subscribe({
      next: (transactions) => {
        this.transactions = transactions.slice(0, 10);
        console.log(this.transactions);
        this.dataSource = this.transactions;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

// this.transactions.forEach((item) => {
//   if (
//     new Date(item.transactionDate) >= new Date('2023-05-31') &&
//     new Date(item.transactionDate) <= new Date('2023-06-07')
//   ) {
//     console.log('Yes!!!', item.transactionDate);
//   }
//   if (
//     new Date(item.transactionDate).toString() ===
//     new Date('2023-05-23').toString()
//   ) {
//     console.log('No!!!', item.transactionDate);
//   }
// });
