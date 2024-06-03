import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [ ` nav{  background-color: #f2a4fb !important;}`
             , `nav-titulo{  font-size: .2rem;}`]
})
export class NavbarComponent {

  userLogging = null;



}
