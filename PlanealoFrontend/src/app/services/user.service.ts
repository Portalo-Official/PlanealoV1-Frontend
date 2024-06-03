import { environmets } from './../environments/environments.dev';

import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/Usuario';
import { IServiceUsuario } from '../interfaces/dao/IServiceUsuario.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements IServiceUsuario<Usuario, string>{
  userlogin?: Usuario;

  list?: Usuario[] | undefined;
  private baseURL: string = environmets.baseUrl;
  private endpoint: string = environmets.endPoint.customers;

  constructor(private http: HttpClient) { }

  login(): Observable<Usuario | null> {

    return this.http.get<Usuario>(`${this.baseURL}${this.endpoint}/login`)
                    .pipe(
                      catchError(() => of(null))
                    );
  }
  getAll(): Observable<Usuario[]> {
    
    return this.http.get<Usuario[]>(`${this.baseURL}${this.endpoint}/all`)
                    .pipe(
                      catchError(() => of([]))
                    );
  }
  delete(k: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${this.baseURL}/${this.endpoint}`, {body:{id:k}})
    .pipe(
      catchError( () => of(false))
    );
  }
  
  getByReferencia(k: string): Observable<Usuario | null> {
    return this.http.get<Usuario | null>(`${this.baseURL}/${this.endpoint}/${k}`)
    .pipe(
      catchError( () => of(null))
    );
  }
  update(t: Usuario): Observable<Usuario | null> {
    return this.http.put<Usuario>(`${this.baseURL}/${this.endpoint}/${t.ref}`, {t})
    .pipe(
      catchError( () => of(null))
    );
  }
  create(t: Usuario): Observable<Usuario | null> {
    return this.http.post<Usuario>(`${this.baseURL}/${this.endpoint}`, {t})
    .pipe(
      catchError( () => of(null))
    );
  }



}
