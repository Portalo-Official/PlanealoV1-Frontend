import { Component, Input } from '@angular/core';
import { Plan } from 'src/app/interfaces/Plan';

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrls: ['./card-plan.component.css']
})
export class CardPlanComponent {
  @Input()
  public plan!: Plan;
}
