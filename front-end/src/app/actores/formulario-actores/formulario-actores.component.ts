import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder) { }

  form : any = FormGroup;

  @Input()
  modelo: actorDTO | any;

  @Input()
  errores: string[] = [];

  @Output()
    OnSubmit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  ngOnInit(): void {
    this.form= this.FormBuilder.group({
      nombre: [
        '', 
        {
        validators: [Validators.required],
      
      },
    ],
    fechaNacimiento: '',
    foto: '',
    biografia: ''
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }
  }

  archivoSeleccionado(file: any){
    this.form.get('foto').setValue(file);
  }
  cambioMarkdown(texto: string | any){
    this.form.get('biografia').setValue(texto);
  }
  onSubmit(){
    this.OnSubmit.emit(this.form.value);
  }
}
