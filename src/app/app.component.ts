import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  CurrentYear:number = 2022;
  CurrentMonth:number = 9;
  CurrentDate:number = 13;
  


  ngOnInit(): void{

  }

}
