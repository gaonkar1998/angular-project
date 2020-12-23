import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthenticateService } from '../app/login/authenticate.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { QuestionsComponent } from './questions/questions.component';
import { ExamsComponent } from './exams/exams.component';
import { BranchComponent } from './branch/branch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import{NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    IndexComponent,
    AdmindashboardComponent,
    SidebarComponent,
    QuestionsComponent,
    ExamsComponent,
    BranchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxPaginationModule
    
  ],
  providers: [AuthenticateService],
  bootstrap: [AppComponent],

})
export class AppModule { }
