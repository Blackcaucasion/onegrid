import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IssueComponent } from './issue/issue.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"new",component:IssueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
