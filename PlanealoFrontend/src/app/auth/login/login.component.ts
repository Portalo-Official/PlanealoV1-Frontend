import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
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
      // this.router.navigate(['/plan/user']);
      this.router.navigate(['/home']);
      this.loginForm.reset();
    }else{
      this.loginForm.markAllAsTouched();
      alert("Formulario no válido");
    }
  }

  get email() {
    return this.loginForm.get('email');
  }
  
  get password() {
    return this.loginForm.get('password');
  }

}
