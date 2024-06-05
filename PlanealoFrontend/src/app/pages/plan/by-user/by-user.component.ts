import { Component } from '@angular/core';
import { Plan } from 'src/app/interfaces/Plan';
import { Usuario } from 'src/app/interfaces/Usuario';
import { LoginPlanealoService } from 'src/app/services/login.service';
import { PlanesService } from 'src/app/services/planes.service';

@Component({
  selector: 'app-by-user',
  templateUrl: './by-user.component.html',
  styleUrls: ['./by-user.component.css']
})
export class ByUserComponent {
  planes : Plan[] = [];
  userLoginData?: Usuario;
  constructor(private planesService : PlanesService,
              private loginService: LoginPlanealoService
               ) { }

  ngOnInit(): void {
    
    this.loginService.currentUserData.subscribe( (userData) => {
      this.userLoginData = userData;
    });
    
    this.planesService.getAllByUsuario(this.userLoginData?.ref!).subscribe(data => {
      if(data){
        this.planes = data;
      }      
    })
  }

}
