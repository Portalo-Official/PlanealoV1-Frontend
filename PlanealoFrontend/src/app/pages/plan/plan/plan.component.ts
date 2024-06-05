import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Plan } from 'src/app/interfaces/Plan';
import { FormattedPlan } from 'src/app/interfaces/PlanFormat';
import { PlanesService } from 'src/app/services/planes.service';
import { DateUtils } from 'src/app/utils/dateformat';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit{
  ref!: string;
  
  planFormato? : Plan | any;

  constructor(
              private planService: PlanesService,
              private activatedRoute : ActivatedRoute
              ) { }
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      // Le damos la ref (como pone en routing.module) ya al service
      switchMap( params => {
        console.log(params['ref'] + "Parametros");
        
        return this.planService.getByReferencia(params['ref']);
      })
    )
    .subscribe( resp =>{
      if (resp && Array.isArray(resp)) {
        this.planFormato = resp[0] || null;
      }
    }
    );

  }
}
