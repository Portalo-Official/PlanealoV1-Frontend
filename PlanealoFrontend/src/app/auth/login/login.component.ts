import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPlanealoService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  loginForm = this.formBuilder.group({
    email: ['harnina@harnina.com', [Validators.required, Validators.email]],
    password: ['H12345', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
              private formBuilder: FormBuilder,
              private router:Router,
              private loginService: LoginPlanealoService
            ) { }  
  
  ngOnInit(): void {

  }

  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.email!.value!, this.password!.value!).subscribe(
        (user) => {
          if(user){
            console.log(user);
            this.router.navigate(['/home']);
          }else{
            alert("Usuario no encontrado");
          }
        }
        );     
    
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
