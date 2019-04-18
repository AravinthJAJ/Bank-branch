import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankBranchesComponent } from './Bank-Branches/bank-branches/bank-branches.component';

const routes: Routes = [
  {
    path: '',
    component: BankBranchesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
