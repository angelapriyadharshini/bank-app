import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSummaryComponent } from './account/account-summary.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'account-summary' },
  {
    path: 'account-summary',
    component: AccountSummaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
