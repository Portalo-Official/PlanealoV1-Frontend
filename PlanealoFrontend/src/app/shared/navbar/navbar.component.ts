import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';
import { LoginPlanealoService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // styles: [ ` nav{  background-color: #f2a4fb !important;}`
  //            , `nav-titulo{  font-size: .2rem;}`
  //            , `.salir:hover{  color: red;}`
  //           ]
})
export class NavbarComponent implements OnInit{

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

  logout(){
    this.loginService.currentUserLoginOn.next(false);
    this.loginService.currentUserData.next({} as Usuario);
  }
}
