import { Component, OnInit } from '@angular/core';
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

  calcular(MontoActual: number) {
    console.log(`MontoActual ${MontoActual}`);
    this.totalCapital = this.totalCapital - MontoActual;
    console.log(`MontoActual new ${MontoActual}`);
  }

  calculateCapital() {
    this.usersApiService.getUsersList(true)
      .subscribe((data: any) => {
        for (const valorUser of data) {
          this.totalBorrowed += valorUser.valorPrestamo;
        }
        this.totalCapital = this.totalCapital - this.totalBorrowed;
      }, (errorServicio) => {

      });
  }


  constructor(private usersApiService: UsersApiService) {
    this.initiallyCapital = environment.FinancialCapital;
    this.totalCapital = environment.FinancialCapital;
    this.usersApiService.getUsersList(true);
    this.calculateCapital();
  }

  ngOnInit(): void {
  }

}
