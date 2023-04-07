import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []
  public items = new BehaviorSubject<any>([]);

  constructor(private httpClient: HttpClient) {
    this.header.append("accept", "text/json");
    this.header.append("Access-Control-Allow-Origin", "*");
  }


  header: HttpHeaders = new HttpHeaders();

  //   getAllCarts() : Observable<any>{
  //     return this.httpClient.get('http://34.226.210.109:9000/allCarts', { headers: this.header });
  // }

  getAllCarts() {
    return this.items.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.items.next(product);
  }
  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.items.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.fooid === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.items.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = []
    this.items.next(this.cartItemList);
  }
}