import { Account } from './account.service';

export const ACCOUNTS: Account[] = [
  {
    id: '1',
    title: 'Savings Account',
    accountNumber: '099-34XXX-765',
    accountStatus: 'ACTIVE',
    cumulativeBalance: 123456.73,
    accountCurrency: 'LKR',
  },
  {
    id: '2',
    title: 'Savings Account',
    accountNumber: '099-43XXX-922',
    accountStatus: 'INACTIVE',
    cumulativeBalance: 16356.03,
    accountCurrency: 'LKR',
  },
  {
    id: '3',
    title: 'ABC Visa Credit Card',
    accountNumber: '4534-XXXX-XXXX-9765',
    accountStatus: 'ACTIVE',
    cumulativeBalance: 98043.53,
    accountCurrency: 'LKR',
  },
];
