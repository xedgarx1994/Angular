import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { generoDTO } from '../genero';

@Component({
  selector: 'app-indices-generos',
  templateUrl: './indices-generos.component.html',
  styles: [
  ]
})
export class IndicesGenerosComponent implements OnInit {

  constructor(private generosService: GenerosService) { }
  generos: generoDTO[] = [];
  columnasAMostrar = ['id', 'nombre', 'acciones'];

  ngOnInit(): void {
    this.generosService.obtenerTodos()
    .subscribe(generos => {
      this.generos = generos;
    }, error => console.error(error));
    
  }

}
