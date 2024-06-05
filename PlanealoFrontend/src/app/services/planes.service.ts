import { Injectable } from '@angular/core';
import { Dao } from '../interfaces/dao/dao.interface';
import { Plan } from '../interfaces/Plan';
import { Observable, catchError, delay, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environmets } from '../environments/environments.dev';
import { planes } from '../mock/planes.mock';
import { Iplan } from '../interfaces/dao/Iplan.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanesService implements Iplan<Plan, string>{

  list?: Plan[] | undefined;

  private baseURL : string = environmets.baseUrl;
  private endPoint : string = environmets.endPoint.planes;

  constructor(private http: HttpClient) { }
  
  getAllByUsuario(referencia: string): Observable<Plan[] | null> {
    return this.http.get<Plan[]>(`${this.baseURL}${this.endPoint}/user/${referencia}`)
    .pipe(
      catchError( () => of(null))
    );
  }

  getAll(): Observable<Plan[]> {
    return this.http.get<Plan[]>(`${this.baseURL}${this.endPoint}/all`)
                    .pipe(
                                        
                    );
    // return of(planes).pipe(
    //   delay(1000) 
    // );
  }
  delete(k: string): Observable<Boolean> {
    throw new Error('Method not implemented.');
  }
  getByReferencia(k: string): Observable<Plan | null> {
    console.log("referencia plan: "+ k);
    
    return this.http.get<Plan | null>(`${this.baseURL}${this.endPoint}/${k}`)
    .pipe(
      tap( (data) => { console.log(data);}
      ),
      catchError( () => of(null))
    );
  }
  update(t: Plan): Observable<Plan | null> {
    throw new Error('Method not implemented.');
  }
  create(t: Plan): Observable<Plan | null> {
    throw new Error('Method not implemented.');
  }

}
