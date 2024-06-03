import { Component, OnInit } from '@angular/core';

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
  constructor() { }


  ngOnInit(): void {

  }

}
