import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor() { }

  modelo: cineDTO = {nombre : "Naruto Shippuden", latitud: -0.21012512431167213, longitud: -78.49692821502687}

  ngOnInit(): void {
  }
  guardarCambios(cine: cineCreacionDTO){
    console.log(cine);
  }
}
