import { UsersApiService } from './../../services/users-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applications-approved',
  templateUrl: './applications-approved.component.html',
  styleUrls: ['./applications-approved.component.scss']
})
export class ApplicationsApprovedComponent implements OnInit {

  public users: any[] = [];

  constructor(private usersApiService: UsersApiService) {

  }

  ngOnInit(): void {
    this.usersApiService.getUsersList(true)
      .subscribe((data: any) => {
        this.users = data;
      }, (errorServicio) => {
      });
  }

}
