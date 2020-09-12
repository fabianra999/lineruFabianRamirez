import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http: HttpClient) {
    console.log("userApi")
  }


  getUser(id = 123123123) {
    this.http.get(`${environment.urlApi}/users?cedula=${id}`)
      .subscribe(data => {
        console.log(data);
      });
  }



  getUsersList(stateUser = true) {
    this.http.get(`${environment.urlApi}/users?status=${stateUser}`)
      .subscribe(data => {
        console.log(data);
      });
  }

}
