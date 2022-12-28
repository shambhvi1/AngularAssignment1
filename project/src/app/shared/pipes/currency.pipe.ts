import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency1'
})
export class Currency1Pipe implements PipeTransform {

  transform(value: number, currencyFormat : string)  {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency:currencyFormat ,
      minimumFractionDigits: 0,
    }).format(Number(value));
  }
}
   
  
  


