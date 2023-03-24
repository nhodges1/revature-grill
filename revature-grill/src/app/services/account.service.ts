import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  account: Account = { username: "", password: "" }

  constructor(private http: HttpClient) { }

  postAccountAPI(account: Account) {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Account>("http://127.0.0.1:9000/login", account, { headers: header });

  }

}