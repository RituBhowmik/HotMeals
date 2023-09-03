import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Recipe1} from 'src/recipeType';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit
{   constructor(private httpClient: HttpClient, private _snackBar: MatSnackBar){}
public data:Recipe1 = { title: '', subTitle: '',  content: '' };
public saveFlag:boolean= false;
ngOnInit(): void {
  
  }
save(){

  this.httpClient
  .post(
    `http://localhost:3000/writeOwnMeals`,
    this.data
  )
  .subscribe(() => {
    this.saveFlag=true;
    this._snackBar.open('Your changes are saved!', '', {
      duration: 2 * 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      
    });
  });
}
another(){
  this.saveFlag=false;
  this.data = { title: '', subTitle: '',  content: '' };
}
}
