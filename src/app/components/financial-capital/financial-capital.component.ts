import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-financial-capital',
  templateUrl: './financial-capital.component.html',
  styleUrls: ['./financial-capital.component.scss']
})
export class FinancialCapitalComponent implements OnInit {

  totalCapital: number;

  calcular(MontoActual: number) {
    console.log(`MontoActual ${MontoActual}`);
    this.totalCapital = this.totalCapital - MontoActual;
    console.log(`MontoActual new ${MontoActual}`);
  }

  constructor() {
    this.totalCapital = environment.FinancialCapital;
  }

  ngOnInit(): void {
  }

}
