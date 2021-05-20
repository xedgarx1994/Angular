import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { generoDTO } from '../genero';
import { HttpResponse } from '@angular/common/http';

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
  cantidadTotalRegistros: any;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.generosService.obtenerTodos()
    .subscribe((respuesta: HttpResponse<generoDTO[] | any>) => {
      this.generos = respuesta.body;
      console.log(respuesta.headers.get("cantidadTotalRegistros"));
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
    }, error => console.error(error));
    
  }

}
