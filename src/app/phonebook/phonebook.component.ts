import { Component, OnInit } from '@angular/core';

export interface Contact {
  firstName: string,
  lastName: string,
  number: string
}

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent implements OnInit {

  phonebook: Contact[] = [
    {
      firstName: 'Petya',
      lastName: 'Zhuk',
      number: '0631111111'
    },
    {
      firstName: 'Petro',
      lastName: 'Petriv',
      number: '0631222222'
    },
    {
      firstName: 'Alejandro',
      lastName: 'Albrechet',
      number: '0633333333'
    },
    {
      firstName: 'Vasylyna',
      lastName: 'Vrublevska',
      number: '0635555555'
    },
    {
      firstName: 'Ira',
      lastName: 'Tytar',
      number: '0636666666'
    },
    {
      firstName: 'Sofia',
      lastName: 'Zhuk',
      number: '0977777777'
    },
  ];

  isEdit = false;
  isAdd = false;
  editConact: Contact = {
    firstName: '',
    lastName: '',
    number: ''
  };
  searchSign: string = '';
  contactIndex: number;
  sortValue: string = '';
  column: string = 'firstName';

  constructor() { }

  ngOnInit(): void {
  }
  add(): void {
    this.editConact = {
      firstName: '',
      lastName: '',
      number: ''
    };
    this.isAdd = true;
  }
  edit(i: number):void {
    this.contactIndex = i;
    this.isEdit = true;
    this.editConact = { ...this.phonebook[i] };
  }
  delete(i: number):void {
    this.phonebook.splice(i, 1);
  }
  save(): void{
    if (this.editConact.firstName && this.editConact.lastName && this.editConact.number) {
      this.isAdd ? this.phonebook.push(this.editConact) : this.phonebook[this.contactIndex] = this.editConact;
      this.isEdit = false;
      this.isAdd = false;
    }
  }
  changesort() {
    this.sortValue == '' || this.sortValue == 'desc' ? this.sortValue = 'asc' : this.sortValue = 'desc';
  }
  setColumnAndSort(column: string) {
    this.changesort();
    this.column = column;
  }
}
