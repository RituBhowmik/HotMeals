
import { Component, OnInit } from '@angular/core';

export type comment = {
  User: string;
  comment: string;
  date: string;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {


  title = 'HotMeals';
 
}

