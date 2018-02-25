import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elipsis'
})
export class ElipsisPipe implements PipeTransform {

  transform(value: string, max: number): string {
    return value.length > max ? value.substring(0,max)+ '...' : value;
  }

}
