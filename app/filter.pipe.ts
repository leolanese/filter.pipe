import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  nameFilter: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter( n => {
      return n.toLowerCase().includes(searchText);
    });

  }
}
