import { Injectable } from '@angular/core';

import { Item } from './item';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const items = [
    {id: 1, name: 'Bread', isChecked: false, editing: false},
    {id: 2, name: 'Milk', isChecked: false, editing: false},
    {id: 3, name: 'Eggs', isChecked: false, editing: false},
    {id: 4, name: 'Cake', isChecked: false, editing: false},
    {id: 5, name: 'Cookies', isChecked: true, editing: false}
    ];

    return {items};
  }

  constructor() { }

  genId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1: 1;
  }
}
