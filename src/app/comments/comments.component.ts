import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
export type comment = {
  User: string;
  comment: string;
  date: string;
};

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public comment:comment = { User: '', comment: '', date: ''}
  public allComments: any;
  public showForm:boolean= false;
  constructor(private httpClient: HttpClient, public datepipe: DatePipe) {
  
  }
  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/allcomments').subscribe((data) => {
      this.allComments = data;
    });
  }

  public currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');

  addComment(){
  this.showForm=true

  }
  save(){
    this.httpClient
    .post(`http://localhost:3000/writeComments`,  { User: this.comment.User, comment: this.comment.comment, date: this.currentDateTime })
    .subscribe(() => {
      
      alert('we successfully wrote your comment, please refresh the page to see it')
      this.showForm=false;
  
    });
  }
}

