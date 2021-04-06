import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   ngOnInit(): void {
//     setTimeout(() => {
//       this.peliculasEnCines  = [{
//         titulo : 'spiderman man',
//         fecha :  new Date(),
//         precio: 1400.99,
//         poster: 'https://m.media-amazon.com/images/M/MV5BNTMxOGI4OGMtMTgwMy00NmFjLWIyOTUtYjQ0OGQ4Mjk0YjNjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
//       },
//       {
//         titulo : 'Bleach',
//         fecha : new Date('2016-02-10'),
//         precio: 500.99,
//         poster: 'https://m.media-amazon.com/images/M/MV5BZjE0YjVjODQtZGY2NS00MDcyLThhMDAtZGQwMTZiOWNmNjRiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg'
//       }]
//     }, 500);
      
//   } 
//   title = 'esto es una prueba';
//   ocultar = false;
//   peliculasEnCines : any;
//   peliculasExtrenos = [];
  duplicarNumero(valor: number): number{
    return valor * 2;


  }
  manejarRated(voto: number):void{
    alert(voto);
  }
}
