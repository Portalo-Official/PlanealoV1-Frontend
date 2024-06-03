import { Component } from '@angular/core';
import { PlanesService } from 'src/app/services/planes.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {


  constructor(private planesService : PlanesService) { }

  ngOnInit(): void {
    this.planesService.getAll().subscribe(data => {
      console.log(data);
    })
  }


}
