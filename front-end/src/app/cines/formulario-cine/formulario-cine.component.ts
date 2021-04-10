import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import * as EventEmitter from 'events';
import { cineCreacionDTO } from '../cine';

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

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators : [Validators.required]
,      }]
    })

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }
OnSubmit(){
  this.guardarCambios.emit(this.form.value);
}
}
