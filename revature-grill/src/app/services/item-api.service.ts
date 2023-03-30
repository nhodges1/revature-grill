import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Item } from "../models/item";

@Injectable({
    providedIn: 'root'
})
export class ItemApiService {

    item: Item = {
        foodName: "",
        foodId: 0,
        categoryId: 0,
        description: "",
        priceOfItem: 0,
        foodTag: ""
    };

    constructor(private httpClient : HttpClient) { }

    getItemsAPI() : Observable<any>{
        return this.httpClient.get("http://127.0.0.1:9000/items");
    }
    getBfItemsAPI() : Observable<any>{
        return this.httpClient.get("http://127.0.0.1:9000/items/category/1");
    }
    getLdItemsAPI() : Observable<any>{
        return this.httpClient.get("http://127.0.0.1:9000/items/category/2");
    }

    getItemByName(foodName: string | Item) : Observable<any>{
        return this.httpClient.get('http://127.0.0.1:9000/items/name/'+ foodName);
    }

    public addToCart(foodId:number){
        return this.httpClient.get('http://127.0.0.1:9000/addToCart/'+ foodId);
    }
}