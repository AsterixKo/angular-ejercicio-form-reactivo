import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  private formSubmitAttempt: boolean;
  forma: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.forma = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: [''],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]],
      direccion: this.fb.group({
        calle: ['', Validators.required],
        ciudad: ['', Validators.required],
        provincia: ['', Validators.required],
        pais: ['', Validators.required]
      })
    });
  }

  saveForm() {
    this.formSubmitAttempt = true;
    console.log(this.forma);
    // this.loadDataToForm();

    // this.forma.reset();
    // this.forma.reset({
    //   nombre: 'Juan',
    //   apellido: 'Marciaaaal'
    // });
  }

  isFieldValid(field: string) {
    return (!this.forma.get(field).valid && this.forma.get(field).touched) ||
      (this.forma.get(field).untouched && this.formSubmitAttempt);
  }

  // get nombreInvalido(): boolean {
  //   return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  // }

  // get apellidoInvalido(): boolean {
  //   return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  // }

  // get emailInvalido(): boolean {
  //   return this.forma.get('email').invalid && this.forma.get('email').touched;
  // }

  // get calleInvalido(): boolean {
  //   return this.forma.get('direccion.calle').invalid && this.forma.get('direccion.calle').touched;
  // }
  // get ciudadInvalido(): boolean {
  //   return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched;
  // }

  // get provinciaInvalido(): boolean {
  //   return this.forma.get('direccion.provincia').invalid && this.forma.get('direccion.provincia').touched;
  // }
  // get paisInvalido(): boolean {
  //   return this.forma.get('direccion.pais').invalid && this.forma.get('direccion.pais').touched;
  // }
}
