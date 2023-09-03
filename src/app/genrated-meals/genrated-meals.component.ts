import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {generatedRecipe} from 'src/recipeType';
@Component({
  selector: 'app-genrated-meals',
  templateUrl: './genrated-meals.component.html',
  styleUrls: ['./genrated-meals.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class GenratedMealsComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  public requestData: generatedRecipe= {carbs:'', proteins:'', fats: ''};
  switch:boolean=true;
  ngOnInit(): void {
    
  }
  flip: string = 'inactive';
  newMeal(){
  this.generate();
  this.switch= false;
  this.toggleFlip();
  }
  generate(){
    this.httpClient.get('http://localhost:3000/GeneratedRecipe').subscribe((data) => {
    this.requestData= JSON.parse(JSON.stringify(data));
    });
  }
  back(){
    this.switch= true;
    this.toggleFlip();
  }
  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }
}
