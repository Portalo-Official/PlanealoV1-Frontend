import { Pipe, PipeTransform } from '@angular/core';
// Creado para limitar las descripciones de los planes.
@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 80): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}