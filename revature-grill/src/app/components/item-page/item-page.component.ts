import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemApiService } from 'src/app/services/item-api.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent {
  message: string = "";
  item: Item = {
    foodId: 0,
    foodName: '',
    categoryId: 0,
    description: '',
    priceOfItem: 0,
    foodTag: ''
  };
  constructor(private itemApi : ItemApiService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) =>{
      this.item.foodId = Number (params.get('foodId') as string);
      this.itemApi.getItemById(this.item.foodId).subscribe(json => this.item = json);
    });
    
  }
  addToCart(foodId:number){
    this.itemApi.addToCart(foodId).subscribe(
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
