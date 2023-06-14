import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSummaryComponent } from './account-summary.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from '../shared/account.service';
import { Account } from '../shared/account';

describe('AccountSummaryComponent', () => {
  let component: AccountSummaryComponent;
  let fixture: ComponentFixture<AccountSummaryComponent>;
  let service: AccountService;
  let mockAccount: Account;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountSummaryComponent, RouterTestingModule, HttpClientModule],
      providers: [AccountService],
    }).compileComponents();
    service = TestBed.inject(AccountService);

    fixture = TestBed.createComponent(AccountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockAccount = {
      id: 1,
      title: 'Savings Account',
      accountNumber: '0991-3876-7653',
      accountStatus: 'ACTIVE',
      currentBalance: 123456.73,
      accountCurrency: 'LKR',
      accountType: 'SA',
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAccount ', () => {
    let id = 1;

    service.getAccounts().subscribe((item: Account[]) => {
      let res = item.filter((acc: Account) => acc.id === id)[0];
      expect(res).toEqual(mockAccount);
    });
  });
});
