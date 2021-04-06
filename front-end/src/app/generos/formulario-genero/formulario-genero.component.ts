import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as EventEmitter from 'events';
import { primeraLetraMayuscula } from 'src/app/utilidades/Validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder) { }

  form: any = FormGroup;
@Input()
modelo: generoCreacionDTO | any;
  @Output()
  submit : EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3),primeraLetraMayuscula()]
      }]
    })

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }
  GuardarCambios(){
    this.submit.emit(this.form.value);
  }

  ObtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if(campo.hasError('required')){
      return 'El campo nombre es requerido.';
    }


    if(campo.hasError('minlength')){
      return 'Longitud minima de cáracteres es 3'
    }

    if(campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }

}
