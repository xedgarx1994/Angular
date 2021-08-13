import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { credencialesUsuario } from '../seguridad';

@Component({
  selector: 'app-formulario-autentificacion',
  templateUrl: './formulario-autentificacion.component.html',
  styleUrls: ['./formulario-autentificacion.component.css']
})
export class FormularioAutentificacionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form: FormGroup | any;

  @Input()
  errores: string[] = [];
  @Input()
  accion:string | any;
  @Output()
  onSubmit: EventEmitter<credencialesUsuario> = new EventEmitter<credencialesUsuario>();

    ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['',{
        validators: [Validators.required, Validators.email],
      },
    ],
    password: [
      '',
      {
        validators: [Validators.required]
      }
    ]
    })
  }

  obtenerMensajeErrorEmail(){
    var campo = this.form.get('email');
    if(campo.hasError('required')){
      return 'Campo email es obligatorio';
    }
    if(campo.hasError('email')){
      return 'El email no es valido';
    }

    return '';
  }
}
