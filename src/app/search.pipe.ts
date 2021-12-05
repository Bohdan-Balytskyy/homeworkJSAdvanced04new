import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './phonebook/phonebook.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Contact[], search?: string): Contact[] {
    if (value === undefined) return [];
    if (search === '') return value;
    return value.filter(el => {
      for (const key in el) {
        if (el.hasOwnProperty(key)) {
          if (el[key].toLowerCase().includes(search.toLowerCase())) return true;
        }
      }
      return false;
    });
  }

}
