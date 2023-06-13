export interface Transaction {
  transactionDate: Date;
  transactionPostDate: Date;
  transactionAmount: Balance;
  cumulativeBalance: Balance;
  transactionInformation: TransactionInformation;
  transactionDescriptions: TransactionDescriptions;
  transactionAccountId: string;
}

export interface Balance {
  amount: number;
  currencyCode: string;
}

export interface TransactionInformation {
  debitCreditIndicator: string;
  referenceNumber: string;
  transactionType: string;
}

export interface TransactionDescriptions {
  transactionCategory: string;
  transactionPartner: string;
  transactionMode: string;
}
