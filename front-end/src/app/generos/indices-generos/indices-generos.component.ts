import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { generoDTO } from '../genero';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

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
    this.cargarRegistro(this.paginaActual, this.cantidadRegistrosAMostrar);
    
  }

  cargarRegistro(pagina: number, cantidadElementoAMostrar: number){
    this.generosService.obtenerTodos(pagina, cantidadElementoAMostrar)
    .subscribe((respuesta: HttpResponse<generoDTO[] | any>) => {
      this.generos = respuesta.body;
      console.log(respuesta.headers.get("cantidadTotalRegistros"));
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
    }, error => console.error(error));
    
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistro(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  borrar(id: number){
    this.generosService.borrar(id)
    .subscribe(() => {
      this.cargarRegistro(this.paginaActual, this.cantidadRegistrosAMostrar);
    }, error => console.error(error));
  }
}
