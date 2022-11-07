import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  IncomeComponent,
  InvestmentsComponent,
  LoansComponent,
  OutcomeComponent,
} from './components';

const routes: Routes = [
  { path: '', component: IncomeComponent },
  { path: 'outcome', component: OutcomeComponent },
  { path: 'loan', component: LoansComponent },
  { path: 'investment', component: InvestmentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
