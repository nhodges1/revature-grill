import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ItemApiService {
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

}