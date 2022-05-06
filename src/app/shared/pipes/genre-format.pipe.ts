import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreFormat'
})
export class GenreFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    let prefix = 'Műfaj: ';
    let valueWithPrefix = prefix + value;
    return valueWithPrefix;
  }

}
