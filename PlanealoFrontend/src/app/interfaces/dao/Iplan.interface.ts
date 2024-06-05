import { Observable } from 'rxjs';
import { Dao } from './dao.interface';

/**
 * @generic T es la clase principal que se obtiene de las peticiones
 * @generic K es el tipo de dato por el que se identifique el genérico T
 */
export interface Iplan<T, K> extends Dao<T, K>{
  // Array del generico T opcional
  list? : Array<T>;

  getAllByUsuario(referencia: string): Observable<Array<T> | null>;

}