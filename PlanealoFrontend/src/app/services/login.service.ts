import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/Usuario';
import { BehaviorSubject, Observable, catchError, of, tap, throwError } from 'rxjs';
import { LoginInterface } from '../interfaces/dao/loginService.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environmets } from '../environments/environments.dev';


@Injectable({
  providedIn: 'root'
})
export class LoginPlanealoService implements LoginInterface<Usuario>{

    userlogin?: Usuario | null;

    currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    currentUserData: BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>({} as Usuario);

    private baseURL : string = environmets.baseUrl;
    private endPoint : string = environmets.endPoint.customers;

    constructor(
                private http: HttpClient
              ) { }

    login(email : string , password : string): Observable<Usuario | null> {

        return this.http.post<Usuario>(`${this.baseURL}${this.endPoint}/login`, {email, pass:password})
                        .pipe(
                          tap((user) => {
                            if(user){
                              this.userlogin = user;
                              this.currentUserData.next(user);
                              this.currentUserLoginOn.next(true);
                            }else{
                              this.currentUserLoginOn.next(false);
                            }
                          }),
                          catchError(this.handleError)
                        );
        // return of({ref: '1', nombre: 'HarninaMock', email: email, password: null});
      }

      private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          console.error('A ocurrido un erro:', error.error.message);
        } else {
          console.error(
            `Backend retorno codigo: ${error.status}, ` +
            `body fue: ${error.error}`);
        }
        return throwError(() => new Error(
          'Algo salio mal; porfavor intentalo de nuevo mas tarde.'));
      }

      get userData(): Observable <Usuario>{
        return this.currentUserData.asObservable();
      }
}