import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{SidebarComponent} from '../sidebar/sidebar.component';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    var role=localStorage.getItem('role');
    if(role!='ADMIN')
    {
      this.router.navigate(['']);
    }
  }


}
