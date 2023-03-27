import { Component, OnInit } from '@angular/core';
import { Item } from "../../models/item";
import { ItemApiService } from "../../services/item-api.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: Item[] = [];
  allMounted: boolean = true;
  bfMounted: boolean = false;
  ldMounted: boolean = false;

  constructor(private itemApi : ItemApiService) { }
  ngOnInit(): void {
      this.itemApi.getItemsAPI().subscribe(json => this.items = json);
  }

  swapAllMount() {
    this.itemApi.getItemsAPI().subscribe(json => this.items = json);
    this.allMounted=true;
    this.bfMounted=false;
    this.ldMounted=false;
  }
  swapBfMount() {
    this.itemApi.getBfItemsAPI().subscribe(json => this.items = json);
    this.allMounted=false;
    this.bfMounted=true;
    this.ldMounted=false;
  }
  swapLdMount() {
    this.itemApi.getLdItemsAPI().subscribe(json => this.items = json);
    this.allMounted=false;
    this.bfMounted=false;
    this.ldMounted=true;
  }
}
