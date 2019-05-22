import { Pipe, PipeTransform } from '@angular/core';
import { Conseiller } from '../../../model/conseiller';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  agentselectionner: Conseiller[];
  transform(items: Conseiller[], searchText: string): Conseiller[] {
    if (!items) { return this.agentselectionner  ; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();

    return items.filter(it => {

      return (it.cons_nom + it.cons_prenom).toLowerCase().includes(searchText);
    } );
    }

}
