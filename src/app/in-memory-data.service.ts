import { Injectable } from '@angular/core';

import { Item } from './item';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const items = [
      {id: 1, name: 'One', image: './assets/images/1.png', editing: false, isDead: false, isAlive: false},
      {id: 2, name: 'Two', image: './assets/images/2.png', editing: false, isDead: false, isAlive: false},
      {id: 3, name: 'Three', image: './assets/images/3.png', editing: false, isDead: false, isAlive: false},
      {id: 4, name: 'Four', image: './assets/images/4.png', editing: false, isDead: false, isAlive: false},
      {id: 5, name: 'Five', image: './assets/images/5.png', editing: false, isDead: false, isAlive: false},
      {id: 6, name: 'Six', image: './assets/images/1.png', editing: false, isDead: false, isAlive: false},
      {id: 7, name: 'Seven', image: './assets/images/2.png', editing: false, isDead: false, isAlive: false},
      {id: 8, name: 'Eight', image: './assets/images/3.png', editing: false, isDead: false, isAlive: false},
      {id: 9, name: 'Nine', image: './assets/images/4.png', editing: false, isDead: false, isAlive: false},
      {id: 10, name: 'Ten', image: './assets/images/5.png', editing: false, isDead: false, isAlive: false}
    ];

    return {items};
  }

  constructor() { }

  genId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1: 1;
  }
}
