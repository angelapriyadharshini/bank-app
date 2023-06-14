import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { TransactionService } from './shared/transaction.service';
import { Transaction } from './shared/transaction';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

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
import { Constants } from '../app.constants';
import { Helper } from '../shared/helper';

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
    MatNativeDateModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
  ],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})

export class TransactionsComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() isSavings = false;
  panelOpenState = false;
  lastColumn = '';
  debited = Constants.DEBITED;
  credited = Constants.CREDITED;
  transactionTableHeaders: string[] = [];
  transactions: Transaction[] = [];
  dataSource: any;
  transactionHistoryForm = new FormGroup({
    start: new FormControl<Date | null>(null, Validators.required),
    end: new FormControl<Date | null>(null, Validators.required),
    keyword: new FormControl(''),
  });

  constructor(private transactionService: TransactionService, private helper: Helper) {}
  ngOnInit() {
    this.transactionTableHeaders = ['transactionDate', 'transactionPartner', 'transactionAmount',
      this.isSavings ? 'cumulativeBalance' : 'amountOut',
    ];
    this.getInitialTransactions();
  }

  onSubmit() {
    this.getTransactionsByDateRange();
  }

  getInitialTransactions() {
    if (this.isSavings) {
      this.transactionService.getSavingsTransactions().subscribe({
        next: (transactions) => {
          this.transactions = transactions.slice(0, 10);
          this.updateDataSource();
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.transactionService.getCreditCardTransactions().subscribe({
        next: (transactions) => {
          this.transactions = transactions.slice(0, 10);
          this.updateDataSource();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  getTransactionsByDateRange() {
    let startDate = this.transactionHistoryForm.controls.start.value;
    let endDate = this.transactionHistoryForm.controls.end.value;
    if (this.isSavings) {
      this.transactionService.getSavingsTransactions().subscribe({
        next: (transactions) => {
          this.transactions = this.helper.filterByDate(startDate, endDate, transactions);
          this.updateDataSource();
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.transactionService.getCreditCardTransactions().subscribe({
        next: (transactions) => {
          this.transactions = this.helper.filterByDate(startDate, endDate, transactions);
          this.updateDataSource();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  updateDataSource() {
    this.dataSource = new MatTableDataSource<Transaction>(this.transactions);
    this.dataSource.paginator = this.paginator;
  }
}
