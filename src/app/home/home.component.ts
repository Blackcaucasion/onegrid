import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['No','Title', 'Description-Body', 'Client', 'Priority','Type','Assigned To','Status'];
  public dataSource:any ;
  constructor(private issues:IssuesService ) { }

  ngOnInit(): void {
     this.issues.getIssues().subscribe((res)=>{
       this.dataSource = res.reverse()
     })
  }

}
