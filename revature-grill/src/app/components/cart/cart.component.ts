import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { CartService } from 'src/app/services/cart.service';
import { ItemApiService } from 'src/app/services/item-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Description','Price','Quantity','FinalPrice'];
  items: Item[] = [];

  allCarts: any[]= [];
  id: number=0;
 
  Quantity:number=1;
  FinalPrice:number=0;
  grandTotal: number=0;
  total: number=0;
  foodq:number=0;
 


  constructor(private itemApi: ItemApiService,private cartService:CartService,private router:Router) { }
       
  ngOnInit(): void {
    this.getAllCarts();
    
    
  }


  getAllCarts(){
    
    this.itemApi.getAllCarts().subscribe(
      (response: any[])=>
      { console.log(response);
        this.allCarts= response;},
        (error)=>{console.log(error);});
  }

 
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptyCart(){
    this.allCarts=[];
    
  }
  
    public calculateTotal() {
      this.total = 0;
    for (let i = 0; i < this.items.length; i++) {
      this.total += this.items[i].priceOfItem;
    }
    return this.total;
    }
  
  

  

  confirmOrder(){

    alert('Your order is confirmed');
  }

  increaseQuantity() {
    
   this.Quantity++;
  }

  
  decreaseQuantity() {
    if (this.Quantity > 0) {
      this.Quantity--;
    }
  }

}