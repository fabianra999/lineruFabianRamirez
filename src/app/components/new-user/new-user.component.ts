import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';



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

  constructor(formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {

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
    console.log(this.formGroup.value);
    console.log(usuarioJson);
  }

  showPueblo(event): void {
    alert(event);
  }


}
