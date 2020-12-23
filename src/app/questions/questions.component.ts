import { Component, OnInit } from '@angular/core';
import{QuestionService} from "./question.service";
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
marks;
title;
type;
question;
totalRecords;
test=false;
invalid=false;
page:Number=1;
  constructor(private questions:QuestionService) { }

  ngOnInit(): void {
    this.questions.getquestion().subscribe((response:any)=>{
      // console.log(response);
      this.question=response;
    })
  }
 addquestion()
 {
this.questions.add(this.title,this.type,this.marks).
subscribe(
  (response:any)=>
  {
    console.log(response);
    this.test=true;
  },
  err=>{
    this.invalid=true;
  }
)
}
}
