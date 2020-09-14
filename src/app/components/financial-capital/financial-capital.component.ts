import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStates } from './../../app.state';
import { appState } from "./../../store/app.reducer";
import * as appAction from './../../store/app.action';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UsersApiService } from '../../services/users-api.service';

@Component({
  selector: 'app-financial-capital',
  templateUrl: './financial-capital.component.html',
  styleUrls: ['./financial-capital.component.scss']
})
export class FinancialCapitalComponent implements OnInit {

  totalCapital: number;
  initiallyCapital: number;
  totalBorrowed: number = 0;
  newTotal$: Observable<appState[]>;


  constructor(private usersApiService: UsersApiService, private store: Store<any>) {
    this.newTotal$ = this.store.select('appStore');

    this.initiallyCapital = environment.FinancialCapital;
    this.totalCapital = environment.FinancialCapital;
    this.usersApiService.getUsersList(true);
    this.calculateCapital();
  }

  ngOnInit(): void {
  }

  calculateCapital() {
    this.usersApiService.getUsersList(true)
      .subscribe((data: any) => {
        for (const valorUser of data) {
          this.totalBorrowed += valorUser.valorPrestamo;
        }
        this.totalCapital = this.totalCapital - this.totalBorrowed;
        this.store.dispatch(new appAction.Newvalue({ newValue: 12, totalCredits: this.totalCapital }));
      }, (errorServicio) => {

      });
  }

  addTask(name, state) {
    this.store.dispatch(new appAction.Newvalue({ newValue: 12, totalCredits: 23 }));
  }

}
