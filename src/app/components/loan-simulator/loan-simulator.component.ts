import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-loan-simulator',
  templateUrl: './loan-simulator.component.html',
  styleUrls: ['./loan-simulator.component.scss']
})
export class LoanSimulatorComponent implements OnInit {

  @Input() ValorCredito: number = 0;
  @Output() PasameElPueblo = new EventEmitter();


  max: number;
  min: number;
  public valorSlider: number;

  public value: number;
  loanValue: object;
  public nombre:string;




  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  constructor() {
    this.max = environment.maximumLoanValue;
    this.min = 1000000;
    // this.value = 1000000;
    this.value = this.valorSlider;
    this.nombre = "Pueblo de la Toscana";

  }
  ngOnInit(): void {

  }


  lanzar(event) {

      this.PasameElPueblo.emit(this.value);
  }


}
