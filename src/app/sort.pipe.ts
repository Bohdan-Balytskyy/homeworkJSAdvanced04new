import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './phonebook/phonebook.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Contact[], column: 'firstName' | 'lastName' | 'number', sort: string): Contact[] {
    if (value === undefined) return [];
    if (sort === '') return value;
    return sort === 'asc' ?
      value.sort((a, b) => a[column] > b[column] ? 1 : (a[column] < b[column] ? - 1 : 0)) :
      value.sort((a, b) => a[column] < b[column] ? 1 : (a[column] > b[column] ? - 1 : 0));
  }
}
