import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playdateFormat'
})
export class PlaydateFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let prefix = 'Időpont: ';
    return prefix + value;
  }

}
