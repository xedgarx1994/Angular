import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import * as EventEmitter from 'events';
import { cineCreacionDTO } from '../cine';
import { Coordenada } from '../../utilidades/mapa/coordenada';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css']
})
export class FormularioCineComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  form: FormGroup | any

  @Input()
  modelo: cineCreacionDTO | any
  @Output()
  guardarCambios: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>()

  coordenadaInicial: Coordenada[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators : [Validators.required]
,      }],
latitud : [
  '',
  {
    validators: [Validators.required]
  }
],
longitud : [
  '',
  {
    validators : [Validators.required]
  }
]
    })

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
      this.coordenadaInicial.push({latitud: this.modelo.latitud, longitud: this.modelo.longitud});
    }
  }

  coordenadaSelecionada(coordenada: Coordenada){
    this.form.patchValue(coordenada);
  }
OnSubmit(){
  this.guardarCambios.emit(this.form.value);
}
}
