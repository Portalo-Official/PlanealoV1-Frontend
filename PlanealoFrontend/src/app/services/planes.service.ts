import { Injectable } from '@angular/core';
import { Dao } from '../interfaces/dao/dao.interface';
import { Plan } from '../interfaces/Plan';
import { Observable, delay, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environmets } from '../environments/environments.dev';
import { planes } from '../mock/planes.mock';

@Injectable({
  providedIn: 'root'
})
export class PlanesService implements Dao<Plan, string>{

  list?: Plan[] | undefined;

  private baseURL : string = environmets.baseUrl;
  private endPoint : string = environmets.endPoint.planes;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Plan[]> {
    // return this.http.get<Plan[]>(`${this.baseURL}/${this.endPoint}/all`)
    //                 .pipe(
                                        
    //                 );
    return of(planes).pipe(
      delay(1000) 
    );
  }
  delete(k: string): Observable<Boolean> {
    throw new Error('Method not implemented.');
  }
  getByReferencia(k: string): Observable<Plan | null> {
    throw new Error('Method not implemented.');
  }
  update(t: Plan): Observable<Plan | null> {
    throw new Error('Method not implemented.');
  }
  create(t: Plan): Observable<Plan | null> {
    throw new Error('Method not implemented.');
  }

}
