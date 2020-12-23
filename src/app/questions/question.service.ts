import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private url=environment.API_Url;
  constructor(private http:HttpClient) { }
  add(title,type,marks){
    const token=localStorage.getItem("token");
    const httpoptions=
    {
      headers:new HttpHeaders(
        {
            "content-type":"application/json",
            "Authorization":"Bearer "+token
        }
      )
    }
    let object={
      title:title,
      type:type,
      marks:marks
    }
    return this.http.post(this.url+"/question/question/",object,httpoptions);
  }
  getquestion()
  {
    const token=localStorage.getItem("token");
    const httpoptions=
    {
      headers:new HttpHeaders(
        {
            "content-type":"application/json",
            "Authorization":"Bearer "+token
        }
      )
    }
    return this.http.get(this.url+"/question/questions",httpoptions)
  }
}
