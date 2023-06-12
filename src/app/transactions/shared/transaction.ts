export interface Transaction {
  transactionDate: Date;
  transactionPostDate: Date;
  transactionAmount: TransactionAmount;
  transactionInformation: TransactionInformation;
  transactionDescriptions: TransactionDescriptions;
  transactionAccountId: string;
}

export interface TransactionAmount {
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
