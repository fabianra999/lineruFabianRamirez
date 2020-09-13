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





  getUser(idUser: number) {
    return this.http.get(`${environment.urlApi}/users?cedula=${idUser}`);
  }



  getUsersList(stateUser = true) {
    return this.http.get(`${environment.urlApi}/users?status=${stateUser}`);

  }

}
