import { TestBed } from '@angular/core/testing';

import { Account, AccountService } from './account.service';
import { of } from 'rxjs';

describe('AccountService', () => {
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // test for getAccounts
  it('#getAccounts should return all accounts from observable', (done: DoneFn) => {
    const accounts: Account[] = [
      {
        id: 1,
        title: 'Savings Account',
        accountNumber: '099-34XXX-765',
        accountStatus: 'ACTIVE',
        cumulativeBalance: 123456.73,
        accountCurrency: 'LKR',
      },
      {
        id: 2,
        title: 'Savings Account',
        accountNumber: '099-43XXX-922',
        accountStatus: 'INACTIVE',
        cumulativeBalance: 16356.03,
        accountCurrency: 'LKR',
      },
    ];
    spyOn(service, 'getAccounts').and.returnValue(of(accounts));

    service.getAccounts().subscribe((response) => {
      expect(response).toEqual(accounts);
      done();
    });
  });
});
