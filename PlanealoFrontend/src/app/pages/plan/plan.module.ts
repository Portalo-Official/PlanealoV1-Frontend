import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanRoutingModule } from './plan-routing.module';
import { ByUserComponent } from './by-user/by-user.component';
import { CardPlanComponent } from './components/card-plan/card-plan.component';
import { AllComponent } from './all/all.component';


@NgModule({
  declarations: [
    ByUserComponent,
    CardPlanComponent,
    AllComponent,
  ],
  imports: [
    CommonModule,
    PlanRoutingModule,
    
  ]
})
export class PlanModule { }
