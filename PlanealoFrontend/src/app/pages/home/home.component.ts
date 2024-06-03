import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';
import { LoginPlanealoService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  userLogging:boolean = false;
  userLoginData?: Usuario;
  constructor(
            private loginService: LoginPlanealoService 
            ) { }


  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe( (isLogging) => {
      this.userLogging = isLogging;
    });
    this.loginService.currentUserData.subscribe( (userData) => {
      this.userLoginData = userData;
    });
  }
}
