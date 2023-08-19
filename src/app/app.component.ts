import { HttpClient } from '@angular/common/http';
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

export class AppComponent implements OnInit {
  public comment:comment = { User: '', comment: '', date: ''}
  public allComments: any;
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/allcomments').subscribe((data) => {
      this.allComments = data;
    });
  }
  title = 'HotMeals';
}
