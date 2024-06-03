import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Plan } from 'src/app/interfaces/Plan';
import { FormattedPlan } from 'src/app/interfaces/PlanFormat';
import { DateUtils } from 'src/app/utils/dateformat';

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrls: ['./card-plan.component.css']
})
export class CardPlanComponent implements OnChanges{
  @Input()
  public plan!: Plan;
  public planFormateado?: FormattedPlan;
  
  
  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['plan'] && changes['plan'].currentValue)) {
      this.planFormateado = DateUtils.convertToFormattedPlan(this.plan);
    }
  }
  

}
