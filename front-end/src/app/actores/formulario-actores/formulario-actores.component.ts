import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder) { }

  form : any = FormGroup;

  @Input()
  modelo: actorCreacionDTO | any;
  @Output()
    submit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  ngOnInit(): void {
    this.form= this.FormBuilder.group({
      nombre: [
        '', 
        {
        validators: [Validators.required],
      
      },
    ],
    fechaNacimiento: '' 
    });

    if(this.modelo !== undefined){
      this.form.pathValue(this.modelo)
    }
  }

  OnSubmit(){
    this.submit.emit(this.form.value);
  }
}
