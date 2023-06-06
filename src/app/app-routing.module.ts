import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSummaryComponent } from './account/account-summary.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'account' },
  {
    path: 'account',
    component: AccountComponent,
  },
  { path: 'account-summary', component: AccountSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
