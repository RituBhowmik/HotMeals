import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
export type Recipe = {
  title: string;
  subTitle: string;
  image: string;
  content: string;
};
@Component({
  selector: 'app-opening-page',
  templateUrl: './opening-page.component.html',
  styleUrls: ['./opening-page.component.css'],
})

export class OpeningPageComponent implements OnInit {
  public data:Recipe = { title: '', subTitle: '', image: '', content: '' };
  public editable = false;
  public editIndex?: number;
  public recipesData: any;

  constructor(private httpClient: HttpClient, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/allMeals').subscribe((data) => {
      this.recipesData = data;
    });
  }
  edit(index: number) {
    this.editIndex = index;
    this.editable = true;
  }
  save(index: number) {
    this.editIndex = index;
    this.editable = false;

    this.httpClient
      .post(
        `http://localhost:3000/writeMeals/${index + 1}`,
        this.recipesData[index]
      )
      .subscribe(() => {
        this._snackBar.open('Your changes are saved!', '', {
          duration: 2 * 1000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      });
  }
}
