import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  nameFilter: 'filter'
})
export class FilterPipe implements PipeTransform {
  // return a subset of an array of items if any item contains the searchText string
  transform(items: any[], searchText: string): any[] {

    if (isString(value)){
      throw new BaseException('Requires a String as input');
    }
    
    // no string search
    if (!items) {
      return [];
    }

    // no results
    if (!searchText) {
      return items;
    }
    // to unify criteria
    searchText = searchText.toLowerCase();

    return items.filter( n => {
      return n.toLowerCase().includes(searchText);
    });

  }
}
