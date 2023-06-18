import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountSummaryComponent } from './accounts/account-summary/account-summary.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'accounts' },
  { path: 'accounts', component: AccountsComponent },
  { path: 'accounts/:id', component: AccountSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
