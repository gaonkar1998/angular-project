import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{SidebarComponent} from '../sidebar/sidebar.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    var role=localStorage.getItem('role');
    if(role!='STUDENT')
    {
      this.router.navigate(['']);
    }
  }

}
