import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IssuesService {
 token = "Bearer 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5";
 owner= "1-grid";
 repo="GitIntegration"
  constructor( private http: HttpClient) { }
 
public getIssues(){


return this.http.get<any>(`https://api.github.com/repos/${this.owner}/${this.repo}/issues`)
}

public postIssue(issue:any){

  return this.http.post<any>(`https://api.github.com/repos/${this.owner}/${this.repo}/issues`,issue);

}
}

