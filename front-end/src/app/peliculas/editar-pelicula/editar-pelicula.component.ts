import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modelo: PeliculaDTO = {titulo: 'King Kong VS Godzilla', trailer: 'https://www.imdb.com/title/tt5034838/?ref_=vp_vi_tt',
enCines: true, resumen : '# Pelicula de prueba', fechaLanzamiento : new Date(), poster: 'https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg'}
  ngOnInit(): void {
  }

  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log(pelicula);
  }
}
