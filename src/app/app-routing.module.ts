import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationTableComponent } from './components';

const routes: Routes = [
  { path: 'income', component: InformationTableComponent },
  { path: 'outcome', component: InformationTableComponent },
  { path: 'loan', component: InformationTableComponent },
  { path: 'investment', component: InformationTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
