import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../../../model/client';
@Pipe({
  name: 'filter2'
})
export class AffectationPipe1 implements PipeTransform {
  clientselectionner: Client[];
  transform(items: Client[], searchText1: string): Client[] {
    if (!items) { return this.clientselectionner; }
    if (!searchText1) { return items; }
    searchText1 = searchText1.toLowerCase();

    return items.filter(it => {

      return (it.nom + it.prenom).toLowerCase().includes(searchText1);
    });
  }
}

