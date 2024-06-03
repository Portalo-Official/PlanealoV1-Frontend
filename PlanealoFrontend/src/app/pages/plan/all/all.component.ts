import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/interfaces/Plan';
import { PlanesService } from 'src/app/services/planes.service';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit{

  planes : Plan[] = [];

  constructor(private planesService : PlanesService) { }

  ngOnInit(): void {
    this.planesService.getAll().subscribe(data => {
      console.log(data);
      
      this.planes = data;
    })
  }


}
