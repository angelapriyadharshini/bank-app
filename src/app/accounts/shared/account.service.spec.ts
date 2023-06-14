import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AccountService } from './account.service';
import { Account } from './account';
import { MaskPipe } from 'src/app/shared/mask.pipe';

describe('AccountService', () => {
  let service: AccountService;
  let httpTestingController: HttpTestingController;
  let mockAccounts: Account[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountService],
      declarations: [MaskPipe],
    });
    service = TestBed.inject(AccountService);
    httpTestingController = TestBed.inject(HttpTestingController);

    mockAccounts = [
      {
        id: 1,
        title: 'Savings Account',
        accountNumber: '0991-3876-7653',
        accountStatus: 'ACTIVE',
        currentBalance: 123456.73,
        accountCurrency: 'LKR',
        accountType: 'SA',
      },
      {
        id: 2,
        title: 'Savings Account',
        accountNumber: '099-43XXX-922',
        accountStatus: 'INACTIVE',
        currentBalance: 16356.03,
        accountCurrency: 'LKR',
        accountType: 'CC',
      },
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // test for get all accounts
  it('should return all accounts from observable', () => {
    service.getAccounts().subscribe((accounts) => {
      expect(accounts).toEqual(mockAccounts);
    });

    const request = httpTestingController.expectOne(`assets/accounts.json`);
    expect(request.request.method).toBe('GET');
    request.flush(mockAccounts);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
