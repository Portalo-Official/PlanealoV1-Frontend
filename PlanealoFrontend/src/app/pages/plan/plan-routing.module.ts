import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { PlanComponent } from './plan/plan.component';
import { ByUserComponent } from './by-user/by-user.component';

const routes: Routes = [
  { path: '', component : AllComponent },
  { path: 'user/:ref', component : ByUserComponent },
  { path: ':id', component : PlanComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
