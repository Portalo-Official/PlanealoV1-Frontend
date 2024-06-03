import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanRoutingModule } from './plan-routing.module';
import { ByUserComponent } from './by-user/by-user.component';



@NgModule({
  declarations: [
    ByUserComponent
  ],
  imports: [
    CommonModule,
    PlanRoutingModule
  ]
})
export class PlanModule { }
