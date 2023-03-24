import { Component } from '@angular/core';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = ""
  password: string = ""
  message: string = "";


  constructor(private accountService: AccountService) { }

  postAccount(): void {
    let account: Account = { username: this.username, password: this.password }
    this.accountService.postAccountAPI(account).subscribe(
      (response: any) => {
        console.log(response);
        this.message = response.message;
      },
      (error) => {
        this.message = "Invalid username or password.";
      }
    );
  }

}