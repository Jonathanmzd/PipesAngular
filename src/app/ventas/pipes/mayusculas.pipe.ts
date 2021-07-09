import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
  
  transform():string {
    return 'Hola Mundo';
  }


}