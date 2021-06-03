import { Component, OnInit } from '@angular/core';
import { ActoresService } from '../actores.service';
import { actorDTO } from '../actor';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-indice-actores',
  templateUrl: './indice-actores.component.html',
  styleUrls: ['./indice-actores.component.css']
})
export class IndiceActoresComponent implements OnInit {

  constructor(private actoresService: ActoresService) { }

  actores: actorDTO[] = [];
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros: any;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistro(this.paginaActual, this.cantidadRegistrosAMostrar);
    
  }

  cargarRegistro(pagina: number, cantidadElementoAMostrar: number){
    this.actoresService.obtenerTodos(pagina, cantidadElementoAMostrar)
    .subscribe((respuesta: HttpResponse<actorDTO[] | any>) => {
      this.actores = respuesta.body;
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
    this.actoresService.borrar(id)
    .subscribe(() => {
      this.cargarRegistro(this.paginaActual, this.cantidadRegistrosAMostrar);
    }, error => console.error(error));
  }
}

