import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas/peliculas.service';
import { PeliculaDTO } from '../peliculas/peliculas';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private peliculasServices: PeliculasService){}

    ngOnInit(): void {
      this.cargarDatos();
    } 
    peliculasEnCines : PeliculaDTO[] | any;
    peliculasProximosEstrenos :any | PeliculaDTO[];

    cargarDatos(){
      this.peliculasServices.obtenerLandingPage().subscribe(landingPage => {
        this.peliculasEnCines = landingPage.enCines;
        this.peliculasProximosEstrenos = landingPage.proximosEstrenos;
      });
    }
    borrado(){
      this.cargarDatos();
    }

}
