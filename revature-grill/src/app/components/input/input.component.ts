import { Component, OnInit } from '@angular/core';
import { Register1Service } from 'src/app/services/register1.service';
import { Register } from 'src/app/models/register';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class Input1Component implements OnInit {
    userName:string = "";
    name:string = "";
    email:string = "";
    password:string = "";
    constructor(private register1Service : Register1Service) { }

    ngOnInit(): void {
        
    }

    register() : void {
      console.log("Submitted Registration");
        let register : Register = {
            userName:this.userName, 
            name:this.name, 
            email:this.email,
            password:this.password
        };
        this.register1Service.submitRegistration(register).subscribe();
    }
    
}
