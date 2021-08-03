import { Component, Input, OnInit, Output } from '@angular/core';
import { PeliculaDTO } from '../peliculas';
import { PeliculasService } from '../peliculas.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor(private peliculasServices: PeliculasService) { }
  @Input()
  peliculas : any | PeliculaDTO[];

  @Output()
  borrado: EventEmitter<void> = new EventEmitter<void>();
  ngOnInit(): void {
  }
  borrar(peliculaId: number):void {
    this.peliculasServices.borrar(peliculaId)
    .subscribe(()=> this.borrado.emit());
  }
}
