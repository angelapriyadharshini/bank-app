import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { TransactionService } from './shared/transaction.service';
import { Transaction } from './shared/transaction';
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
    MatPaginatorModule
  ],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})

export class TransactionsComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() isSavings = false;
  panelOpenState = false;
  amountColumnHeader = '';
  debited = Constants.DEBITED;
  credited = Constants.CREDITED;
  transactionTableHeaders: string[] = [];
  savingsTransactions: Transaction[] = [];
  defaultSavingsTransactions: Transaction[] = [];
  creditCardTransactions: Transaction[] = [];
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
    this.amountColumnHeader = this.isSavings? 'Amount':'Amount In';
    this.getInitialTransactions();
  }

  getInitialTransactions() {
    if (this.isSavings) {
      this.transactionService.getSavingsTransactions().subscribe({
        next: (transactions) => {
          this.savingsTransactions = transactions;
          this.showLatestTenTransactions(this.savingsTransactions);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.transactionService.getCreditCardTransactions().subscribe({
        next: (transactions) => {
          this.creditCardTransactions = transactions;
          this.showLatestTenTransactions(this.creditCardTransactions);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  // default - display latest 10 transactions
  showLatestTenTransactions(transactions: Transaction[]) {
    this.transactions = transactions.slice(0,10);
    this.updateDataSource();
  }

  onSubmit() {
    this.filterTransactions();
  }

  filterTransactions() {
    if (this.isSavings) {
      this.filterAll(this.savingsTransactions);
    } else {
      this.filterAll(this.creditCardTransactions)
    }
    this.updateDataSource();
  }

  resetFilters() {
    this.transactionHistoryForm.reset();
    this.isSavings ? this.showLatestTenTransactions(this.savingsTransactions)
    :this.showLatestTenTransactions(this.creditCardTransactions);
  }

  // integrates pagination with table
  updateDataSource() {
    this.dataSource = new MatTableDataSource<Transaction>(this.transactions);
    this.dataSource.paginator = this.paginator;
  }

  filterAll(transactions: Transaction[]) {
    const keyword = this.transactionHistoryForm.controls.keyword.value;
    const startDate = this.transactionHistoryForm.controls.start.value;
    const endDate = this.transactionHistoryForm.controls.end.value;
    const filteredByDateRange = this.helper.filterByDate(startDate, endDate, transactions);

    if (keyword !== '' && keyword !== null) {
      // transactions within the selected date range and containing the keyword 
      this.transactions = this.helper.filterByKeyword(filteredByDateRange, keyword);
    } else {
      // if no keyword provided, transactions are filtered only by date range
      this.transactions = this.helper.filterByDate(startDate, endDate, transactions);
    }
  }
}
