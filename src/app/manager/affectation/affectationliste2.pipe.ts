import { Pipe, PipeTransform } from '@angular/core';
import { Client2 } from 'src/model/client2';
@Pipe({
  name: 'filter2'
})
export class AffectationPipe1 implements PipeTransform {
  clientselectionner: Client2[];
  transform(items: Client2[], searchText1: string): Client2[] {
    if (!items) { return this.clientselectionner; }
    if (!searchText1) { return items; }
    searchText1 = searchText1.toLowerCase();

    return items.filter(it => {

      return (it.clientNom + it.clientPrenom).toLowerCase().includes(searchText1);
    });
  }
}

