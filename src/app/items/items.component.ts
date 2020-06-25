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
  deadunits = [];
  recruited = [];
  private toggle: boolean = false;

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

  edit(item: Item): void {
    item.isActive != item.isActive;
    item.editing = true;
    item.isAlive = true;
    this.recruited.push(item);
  }

  dead(item: Item): void {
    this.toggle != this.toggle
    item.isDead = true;
    item.isAlive = false;
    this.itemService.updateItem(item).subscribe();
    this.deadunits.push(item);
  }

}
