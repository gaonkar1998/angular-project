import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private url=environment.API_Url;
  constructor(private http:HttpClient) { }
  getbranch()
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
    return this.http.get(this.url+"/branch/branches",httpoptions)
  }
}
