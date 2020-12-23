import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {IndexComponent} from './index/index.component';
import {AdmindashboardComponent} from './admindashboard/admindashboard.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {QuestionsComponent} from './questions/questions.component';
import{BranchComponent} from './branch/branch.component';
import{ExamsComponent} from './exams/exams.component';
const routes: Routes = [
{
	path:'login',
	component:LoginComponent
},
{
	path:'studentdashboard',
	component: DashboardComponent
},
{
  path:'',
  component:IndexComponent
},
{
  path:'studentlogout',
  component:LoginComponent
},
{
  path:'admindashboard',
  component:AdmindashboardComponent
},
{
  path:'sidebar',
  component:SidebarComponent
},
{
  path:'questions',
  component:QuestionsComponent
},
{
  path:'branch',
  component:BranchComponent
},
{
  path:'exams',
  component: ExamsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
