import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from './authenticate.service';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:String;
password:String;
test=false;
  constructor(private auth:AuthenticateService, private router:Router) { }
  ngOnInit(): void {
  }
  // on click of login generate token and store it in localstorage
login()
{
  this.auth.getToken(this.email,this.password)
  .subscribe(
    (response:any)=>
    {
      console.log(response.token);
      localStorage.setItem("token",response.token);
      const token= jwt_decode(response.token);
      console.log(token);
      const role=token.user.role;
      console.log(role);
      localStorage.setItem("role",role);
      if(role=="STUDENT")
      this.router.navigate(['/studentdashboard']);
      else if(role=="ADMIN")
      this.router.navigate(['/admindashboard']);
    },
    err=>{
      console.log(err);
      this.test=true;
    }
  );
  }
}

