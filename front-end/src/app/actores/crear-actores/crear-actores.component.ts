import { Component, OnInit } from '@angular/core';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-crear-actores',
  templateUrl: './crear-actores.component.html',
  styleUrls: ['./crear-actores.component.css']
})
export class CrearActoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
  }
}
