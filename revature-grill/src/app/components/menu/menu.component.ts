import { Component, OnInit } from '@angular/core';
import { Item } from "../../models/item";
import { ItemApiService } from "../../services/item-api.service";
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  message: string = "";
  items: Item[] = [];
  allMounted: boolean = true;
  bfMounted: boolean = false;
  ldMounted: boolean = false;
  foodMounted: boolean = false;
  foodName: string = "";

  constructor(private itemApi : ItemApiService,private cartService : CartService) { }
  ngOnInit(): void {
      this.itemApi.getItemsAPI().subscribe(json => this.items = json);
  }

  swapAllMount() {
    this.itemApi.getItemsAPI().subscribe(json => this.items = json);
    this.allMounted=true;
    this.bfMounted=false;
    this.ldMounted=false;
    this.foodMounted = false;
  }
  swapBfMount() {
    this.itemApi.getBfItemsAPI().subscribe(json => this.items = json);
    this.allMounted=false;
    this.bfMounted=true;
    this.ldMounted=false;
    this.foodMounted = false;
  }
  swapLdMount() {
    this.itemApi.getLdItemsAPI().subscribe(json => this.items = json);
    this.allMounted=false;
    this.bfMounted=false;
    this.ldMounted=true;
    this.foodMounted = false;
  }

  foodSearch() {
    this.itemApi.getItemByName(this.foodName.toLowerCase()).subscribe(json => this.items = json);
    this.foodMounted=true;
    this.allMounted=false;
    this.bfMounted=false;
    this.ldMounted=false;
    console.log("Button clicked");
  }
  addtocart(foodId:number){
    this.itemApi.addToCart(foodId).subscribe(
      (response: any) => {
        console.log(response);
        this.message = response.message;
      },
      (error) => {
        this.message = "Error";
      }
    );
  }
}