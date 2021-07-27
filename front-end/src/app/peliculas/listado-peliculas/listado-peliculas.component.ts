import { Component, Input, OnInit } from '@angular/core';
import { PeliculaDTO } from '../peliculas';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }
  @Input()
  peliculas : any | PeliculaDTO[];
  ngOnInit(): void {
  }
  remover(indicePelicula: number):void {
    this.peliculas.splice(indicePelicula,1);
  }
}
