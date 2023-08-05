import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export type ownRecipe= {
  title: string,
  subTitle: string,
  imagePath: string,
  content: string
}
@Component({
  selector: 'app-own-recipies',
  templateUrl: './own-recipies.component.html',
  styleUrls: ['./own-recipies.component.css']
})

export class OwnRecipiesComponent {



  data: string | undefined;

  public flag= true;
  public recipesData: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    if(localStorage.length==0)
    {
      this.flag=false;
    }
    else{


    this.httpClient
      .get(`http://localhost:3000/allOwnMeals`)
      .subscribe((data) => {
        this.recipesData = data;
      });
    }
  }


}
