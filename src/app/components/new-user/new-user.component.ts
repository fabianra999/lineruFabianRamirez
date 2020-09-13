import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { UsersApiService } from '../../services/users-api.service';



@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  formGroup: FormGroup;
  public colSize = 4;
  public isMobile: boolean = false;
  public valorPrestamo: number;
  public alert: boolean = false;
  public alertSuccess: boolean = false;

  constructor(formBuilder: FormBuilder, breakpointObserver: BreakpointObserver, private usersApiService: UsersApiService) {

    this.formGroup = formBuilder.group({
      nombre: ['', Validators.requiredTrue],
      correo: ['', Validators.requiredTrue],
      cedula: ['', Validators.requiredTrue],
      valorPrestamo: ['', Validators.requiredTrue],
      fechaPagar: '',
      estadoCredit: '',
      pagoCredito: ''
    });

    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
      if (this.isMobile) {
        this.colSize = 1;
      } else {
        this.colSize = 12;
      }
    });
  }


  ngOnInit(): void {

  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  onFormSubmit() {
    const statuCredit = Math.random() >= 0.5;
    const usuario = this.formGroup.value;
    usuario.status = statuCredit;
    let usuarioJson = JSON.stringify(this.formGroup.value, null, 2);

    this.usersApiService.getUser(usuario.cedula)
      .subscribe((data: any) => {
        if (data.length > 0 && usuario.status === false) {
          this.alert = true;
        } else {
          this.alert = false;
          this.usersApiService.postUser(usuario)
            .subscribe((data: any) => {
              this.alertSuccess = true;
            }, (errorServicio) => {
              this.alertSuccess = false;
            });
        }
      }, (errorServicio) => {
        this.alert = true;
      });
  }

  showPueblo(event): void {
    alert(event);
  }


}
