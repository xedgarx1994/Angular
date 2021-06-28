import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { PeliculaDTO } from '../peliculas';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Coordenada, CoordenadaConMensaje } from '../../utilidades/mapa/coordenada';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  constructor(private peliculasService : PeliculasService,
    private activatedRoute: ActivatedRoute,
    private sanitizer : DomSanitizer) { }

    pelicula: PeliculaDTO | any;
    fechaLanzamiento: Date | any;
    trailerURL: SafeResourceUrl | any;
    coordenadas: CoordenadaConMensaje[] = [];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.peliculasService.obtenerPorId(params.id).subscribe(pelicula => {
        console.log(pelicula);
        this.pelicula = pelicula;
        this.fechaLanzamiento = new Date(this.pelicula.fechaLanzamiento);
        this.trailerURL = this.generarURLYoutubeEmbed(this.pelicula.trailer);
        this.coordenadas = pelicula.cines.map(cine =>{
          return {longitud: cine.longitud, latitud: cine.latitud, mensaje: cine.nombre}
        })
      })      
    })
  }

  generarURLYoutubeEmbed(url: any):SafeResourceUrl{
    if(!url){
      return '';
    }
    var video_id = url.split('v=')[1];
    var posicionAmpersand = video_id.indexOf('&');
    if(posicionAmpersand !== -1){
      video_id = video_id.substring(0, posicionAmpersand);
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/${video_id}')
  }
}