import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { generoDTO } from 'src/app/generos/genero';
import { GenerosService } from 'src/app/generos/generos.service';
import { usuarioDTO } from '../seguridad';
import { SeguridadService } from '../seguridad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-indice-usuarios',
  templateUrl: './indice-usuarios.component.html',
  styleUrls: ['./indice-usuarios.component.css']
})
export class IndiceUsuariosComponent implements OnInit {

  constructor(private seguridadService: SeguridadService) { }
  usuarios: usuarioDTO[] = [];
  columnasAMostrar = ['nombre', 'acciones'];
  cantidadTotalRegistros: any;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistro(this.paginaActual, this.cantidadRegistrosAMostrar);
    
  }

  cargarRegistro(pagina: number, cantidadElementoAMostrar: number){
    this.seguridadService.obtenerUsuarios(pagina, cantidadElementoAMostrar)
    .subscribe((respuesta: HttpResponse<usuarioDTO[] | any>) => {
      this.usuarios = respuesta.body;
      console.log(respuesta.headers.get("cantidadTotalRegistros"));
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
    }, error => console.error(error));
    
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistro(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  hacerAdmin(usuarioId: string){
    this.seguridadService.hacerAdmin(usuarioId)
    .subscribe(() => Swal.fire('Exitoso', 'La operación se ha realizado', 'success'));
  }

  removerAdmin(usuarioId: string){
    this.seguridadService.removerAdmin(usuarioId)
    .subscribe(() => Swal.fire('Exitoso', 'La operación se ha realizado', 'success'));
  }

}
