import { UsersApiService } from './../../services/users-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applications-approved',
  templateUrl: './applications-approved.component.html',
  styleUrls: ['./applications-approved.component.scss']
})
export class ApplicationsApprovedComponent implements OnInit {

  constructor(private usersApiService: UsersApiService ) {
   // this.usersApiService.getUser();
   }

  ngOnInit(): void {
  }

}
