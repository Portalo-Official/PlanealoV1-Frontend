import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  loginForm= this.formBuilder.group({
    email: ['santi@harnina.com', [Validators.required, Validators.email]],
    password: ['S12345', Validators.required]
  });

  constructor(
              private formBuilder: FormBuilder,
              private router:Router
            ) { }  
  
  ngOnInit(): void {

  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.router.navigate(['/home']);
    }else{
      alert("Formulario no válido");
    }
  }

}
