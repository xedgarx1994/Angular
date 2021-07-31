import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO } from '../peliculas';
import { PeliculasService } from '../peliculas.service';
import { MultipleSelectorModel } from '../../utilidades/selector-multiple/MultipleSelectorModel';
import { parsearErroresAPI } from '../../utilidades/utilidades';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  constructor(private peliculasService: PeliculasService,
    private router: Router) { }
  
  errores: string[] = [];
  generosNoSeleccionados: MultipleSelectorModel[] | any;
  cinesNoSeleccionados: MultipleSelectorModel[] | any;

  ngOnInit(): void {
    this.peliculasService.postGet()
    .subscribe(resultado => {

      this.generosNoSeleccionados =resultado.generos.map(genero => {
        return <MultipleSelectorModel>{llave: genero.id, valor: genero.nombre}
      });

      this.cinesNoSeleccionados =resultado.cines.map(cine => {
        return <MultipleSelectorModel>{llave: cine.id, valor: cine.nombre}
      });
    }, error => console.error(error))
  }

  guardarCambios(pelicula: PeliculaCreacionDTO){
    this.peliculasService.crear(pelicula)
    .subscribe((id:number)=> this.router.navigate(['/pelicula/'+id]), 
    error => this.errores = parsearErroresAPI(error))
  }
}
