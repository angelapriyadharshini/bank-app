import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsComponent } from './accounts.component';
import { AccountService } from './shared/account.service';
import { HttpClientModule } from '@angular/common/http';

describe('AccountComponent', () => {
  let component: AccountsComponent;
  let fixture: ComponentFixture<AccountsComponent>;
  let accountService: AccountService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsComponent, HttpClientModule],
    }).compileComponents();
    accountService = TestBed.inject(AccountService);

    fixture = TestBed.createComponent(AccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAccounts() of StudentService on component Init', () => {
    spyOn(component, 'getAccounts').and.callThrough();
    component.ngOnInit();
    expect(component.getAccounts).toHaveBeenCalled();
  });

  it('should call getAccounts() of component', () => {
    spyOn(component.accountService, 'getAccounts').and.callThrough();
    component.getAccounts();
    expect(component.accountService.getAccounts).toHaveBeenCalled();
  });
});
