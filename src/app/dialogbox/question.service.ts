import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private url=environment.API_Url;

  constructor(private http:HttpClient) { }
  addquestion(title,type,marks){
    const token=localStorage.getItem("token");
    const hhtpoptions={
      headers:new HttpHeaders({
        "content-type":"application/json",
        "Authorization":"Bearer "+token
      })
    }
    let object=
    {
      title:title,
      type:type,
      marks:marks
    }
    return this.http.post(this.url+"/question/question/",object,hhtpoptions);
  }
}
