import { Component, OnInit } from '@angular/core';
import{ExamsService} from './exams.service'
@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {
exams;
  constructor(private exam:ExamsService) { }

  ngOnInit(): void {
    this.exam.getexam().subscribe((response:any)=>{
    console.log(response);
    this.exams=response;
  })
}
}