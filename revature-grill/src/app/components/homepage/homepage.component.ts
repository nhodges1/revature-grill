import { Component, OnInit } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  ngOnInit() {
    AOS.init();
  }
}
