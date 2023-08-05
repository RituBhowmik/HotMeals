import { JsonpClientBackend } from '@angular/common/http';
import { IfStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  formData = { title: '', subTitle: '', content: '' };

  @Input() id: number = 100;

  @Output() onSave = new EventEmitter();


  //input can be a variable, but output is always an event
  constructor(private route: ActivatedRoute, private router: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {

  }



  public save() {


    this.httpClient
    .post(`http://localhost:3000/writeOwnMeals`,  { title: this.formData.title, content:this.formData.content, subTitle:this.formData.subTitle })
    .subscribe(() => {

      alert('we successfully wrote your recipe')


    });
    this.formData= { title: '', subTitle: '', content: '' };
   this.id++;
   localStorage['flag']= true;
    //this.router.navigateByUrl("/")
  }

  // index needs to be shared between home and edit
  // with Input decorator
}

//or we can use it as an editable component
