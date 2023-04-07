import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../models/register';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    constructor(private http: HttpClient) { }

    submitRegistration(register: Register): Observable<Register> {
        let header: HttpHeaders = new HttpHeaders();
        header.append("accept", "text/json");
        header.append("Access-Control-Allow-Origin", "*");
        return this.http.post<Register>("http://34.226.210.109:9000/register", register, { headers: header });
    }
}