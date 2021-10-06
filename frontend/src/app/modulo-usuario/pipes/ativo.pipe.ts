import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ativo'
})
export class AtivoPipe implements PipeTransform {

  transform(value: boolean): string {
    return value == true ? 'Ativo' : 'Inativo'
  }

}
