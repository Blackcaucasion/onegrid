import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  public readonly title = new FormControl('');
  public readonly client = new FormControl('');
  public readonly priority = new FormControl('');
  public readonly type = new FormControl('');
  public readonly description = new FormControl('');

  public issueForm = new FormGroup({
    title: this.title,
    client: this.client,
    priority: this.priority,
    type: this.type,
    description: this.description
  });

  constructor(private issues: IssuesService) { }

  ngOnInit(): void {
  }
  submit(): void {
    this.issues.postIssue({
      title: this.title?.value,
      body: this.description?.value,
      state: "open",
      author_association: "OWNER",
      labels: [
        {
          name: this.priority?.value

        },
        {
          name: this.client?.value

        },
        {
          name: this.type?.value

        }
      ]


    }).subscribe()

  }
}
