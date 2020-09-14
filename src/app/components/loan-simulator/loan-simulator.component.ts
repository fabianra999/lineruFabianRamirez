import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { appState } from '../../store/app.reducer';
import * as appActions from '../../store/app.action';
@Component({
  selector: 'app-loan-simulator',
  templateUrl: './loan-simulator.component.html',
  styleUrls: ['./loan-simulator.component.scss']
})
export class LoanSimulatorComponent implements OnInit {




  public max: number;
  public min: number;
  public value: number;
  creditValue$: Observable<any>;

  constructor(private store: Store<any>) {
    this.max = environment.maximumLoanValue;
    this.min = 1000000;
    this.creditValue$ = store.select('appStore');
  }
  ngOnInit(): void {

  }

  creditValueEvent() {
    console.log('this.value');
    console.log(this.value);
    this.store.dispatch(new appActions.Newvalue(this.value));
  }


}
