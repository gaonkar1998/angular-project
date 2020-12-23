import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
	private url=environment.API_Url;

  constructor(private http:HttpClient) { }
  // get bearer token from backend API
  getToken(email,password){
    const httpformat=
    {
      email:email,
      password:password
    }
    return this.http.post(this.url+"/user/login",httpformat);
  }
}
