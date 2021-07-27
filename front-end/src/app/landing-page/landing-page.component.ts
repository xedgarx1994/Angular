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
      this.peliculasServices.obtenerLandingPage().subscribe(landingPage => {
        this.peliculasEnCines = landingPage.enCines;
        this.peliculasProximosEstrenos = landingPage.proximosEstrenos;
      });

    } 
    peliculasEnCines : PeliculaDTO[] | any;
    peliculasProximosEstrenos :any | PeliculaDTO[];

}
