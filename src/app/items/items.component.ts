import { Component, OnInit } from '@angular/core';


import { Item } from '../item';


import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  bcolor = '#ffffff';
  color = '#000000';
  border = '2px solid #868686'

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return;}
    this.itemService.addItem({name} as Item)
    .subscribe(item => {
      this.items.push(item);
    });
  } 

  delete(item: Item) : void {
    this.items = this.items.filter(i => i !== item);
    this.itemService.deleteItem(item).subscribe();
  }

  edit(item: Item) : void {
    item.editing = true;
    item.isAlive = true;
  }

  dead(item: Item) : void {
    item.isDead = true;
    item.isAlive = false;
    this.itemService.updateItem(item).subscribe();
  }

}
