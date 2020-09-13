import { Component, OnInit } from '@angular/core';
import { UsersApiService } from './../../services/users-api.service';

@Component({
  selector: 'app-rejected-applications',
  templateUrl: './rejected-applications.component.html',
  styleUrls: ['./rejected-applications.component.scss']
})
export class RejectedApplicationsComponent implements OnInit {

  public users: any[] = [];

  constructor(private usersApiService: UsersApiService) {
    // this.usersApiService.getUser();
    this.usersApiService.getUsersList(false)
      .subscribe((data: any) => {
        this.users = data;
      }, (errorServicio) => {
      });
  }

  ngOnInit(): void {
  }

}
