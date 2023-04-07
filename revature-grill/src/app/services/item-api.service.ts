import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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

    constructor(private httpClient: HttpClient) {
        this.header.append("accept", "text/json");
        this.header.append("Access-Control-Allow-Origin", "*");
    }

    header: HttpHeaders = new HttpHeaders();
    getItemsAPI(): Observable<any> {
        return this.httpClient.get("http://107.21.67.219:9000/items", { headers: this.header });
    }
    getBfItemsAPI(): Observable<any> {
        return this.httpClient.get("http://107.21.67.219:9000/items/category/1", { headers: this.header });
    }
    getLdItemsAPI(): Observable<any> {
        return this.httpClient.get("http://107.21.67.219:9000/items/category/2", { headers: this.header });
    }

    getItemByName(foodName: string | Item): Observable<any> {
        return this.httpClient.get('http://107.21.67.2199:9000/items/name/' + foodName, { headers: this.header });
    }

    getItemById(foodId: number | Item): Observable<any> {
        return this.httpClient.get('http://107.21.67.219:9000/items/' + foodId, { headers: this.header });

    }

    getAllCarts(): Observable<any> {
        return this.httpClient.get('http://107.21.67.219:9000/allCarts', { headers: this.header });
    }

    public addToCart(foodId: number) {
        return this.httpClient.get('http://107.21.67.2199:9000/addToCart/' + foodId, { headers: this.header });
    }
}