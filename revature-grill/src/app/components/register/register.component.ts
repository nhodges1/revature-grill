import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/register';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  username:string = "";
  name:string = "";
  email:string = "";
  password:string = "";
  message:string = "";
  constructor(private registerService : RegisterService) { }

  ngOnInit(): void {
      
  }

  register() : void {
      let register : Register = {
          username:this.username,
          name:this.name,
          email:this.email,
          password:this.password
      };
      this.registerService.submitRegistration(register).subscribe();
      console.log("Submitted Registration");
      this.message = "Submitted Registration";
  }
}