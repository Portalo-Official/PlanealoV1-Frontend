import { Observable } from 'rxjs';
import { Dao } from './dao.interface';

/**
 * @generic T es la clase principal que se obtiene de las peticiones
 * @generic K es el tipo de dato por el que se identifique el genérico T
 */
export interface LoginInterface<T>{

  login(email : string , password : string): Observable<T | null>;

}