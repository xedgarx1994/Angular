import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { cineDTO } from '../cine';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-indice-cine',
  templateUrl: './indice-cine.component.html',
  styleUrls: ['./indice-cine.component.css']
})
export class IndiceCineComponent implements OnInit {

  constructor(private cinesService: CinesService) { }
  cines: cineDTO[] = [];
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros: any;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistro(this.paginaActual, this.cantidadRegistrosAMostrar);
    
  }

  cargarRegistro(pagina: number, cantidadElementoAMostrar: number){
    this.cinesService.obtenerTodos(pagina, cantidadElementoAMostrar)
    .subscribe((respuesta: HttpResponse<cineDTO[] | any>) => {
      this.cines = respuesta.body;
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
    this.cinesService.borrar(id)
    .subscribe(() => {
      this.cargarRegistro(this.paginaActual, this.cantidadRegistrosAMostrar);
    }, error => console.error(error));
  }

}
