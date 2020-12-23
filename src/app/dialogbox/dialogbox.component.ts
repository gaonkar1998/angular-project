import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {QuestionService} from './question.service';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {
  title;
  marks;
  type;
  constructor(
    private dialogRef: MatDialogRef<DialogboxComponent>,
    private question:QuestionService
    ) { }

  ngOnInit(): void {
  }

close() {
    this.dialogRef.close();
}
add(){
  this.question.addquestion(this.title,this.type,this.marks).
  subscribe(
    (response:any)=>{console.log(response)},
    err=>console.log(err)
  )
}
}
