import { Component, OnInit } from '@angular/core';
import {Router,RouterModule} from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) { }
show_student=false;
show_admin=false;
  ngOnInit(): void {
    var role=localStorage.getItem('role');
    if(role==='ADMIN')
    {
      this.show_admin=true;
      this.show_student=false;
    }
    else if(role==='STUDENT')
    {
      this.show_admin=false;
      this.show_student=true;
    }
    else{
      this.router.navigate(['']);
    }
  }
logout(){
  localStorage.clear();
  this.router.navigate(['']);
}
}
