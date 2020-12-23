import { Component, OnInit } from '@angular/core';
import{BranchService} from './branch.service'
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
branch1;
  constructor(private branch:BranchService) { }

  ngOnInit(): void {
    this.branch.getbranch().subscribe((response:any)=>{
      // console.log(response);
      this.branch1=response;
    })
  }
}
