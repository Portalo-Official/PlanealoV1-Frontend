import { Injectable } from '@angular/core';
import { Dao } from '../interfaces/dao/dao.interface';
import { Plan } from '../interfaces/Plan';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanesService implements Dao<Plan, string>{

  list?: Plan[] | undefined;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Plan[]> {
    return this.http.get<Plan[]>('http://localhost:3000/planes');
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
