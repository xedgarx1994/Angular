import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { generoDTO } from '../../generos/genero';
import { GenerosService } from '../../generos/generos.service';
import { PeliculasService } from '../peliculas.service';
import { PeliculaDTO } from '../peliculas';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {


  constructor(private FormBuilder: FormBuilder,
    
  private location: Location,
  private ActivatedRoute: ActivatedRoute,
  private generosServices: GenerosService,
  private peliculasServices: PeliculasService) { }

  form: any = FormGroup;

  generos: generoDTO[] = [];
  paginaActual = 1;
  cantidadElementosAMostrar = 10;
  cantidadElementos: any;

  peliculas: PeliculaDTO[] = [];


    formularioOriginal = {
      titulo: '',
      generoId: 0,
      proximoEstrenos: false,
      enCines: false
    }
  ngOnInit(): void {

    this.generosServices.obtenerTodos()
    .subscribe(generos => {
      this.generos = generos;

      this.form = this.FormBuilder.group(this.formularioOriginal);
      this.leerValoresURL();
      this.buscarPeliculas(this.form.value);


      this.form.valueChanges
      .subscribe((valores:any) => {
      this.buscarPeliculas(valores);
      this.escribirParametrosBusquedaEnURL();//ayuda a mantener las url en caso de compartir hace que este se incie con el filtro si fuese el caso
      
      })
    })
  }

  private leerValoresURL(){
    this.ActivatedRoute.queryParams.subscribe((params) =>{
      var objeto: any = {};

      if(params.titulo){
        objeto.titulo = params.titulo;
      }

      if(params.generoId){
        objeto.generoId = Number(params.generoId);
      }

      if(params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
      }

      if(params.enCines){
        objeto.enCines = params.enCines;
      }

      this.form.pathValue(objeto);
    })
  }
  private escribirParametrosBusquedaEnURL(){
    var queryString = [];

    var valoresFormulario = this.form.value;

    if(valoresFormulario.titulo){
      queryString.push(`titulo=${valoresFormulario.titulo}`);
    }

    if(valoresFormulario.generoId != '0'){
      queryString.push(`generoId=${valoresFormulario.generoId}`);
    }

    if(valoresFormulario.proximosEstrenos){
      queryString.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }

    if(valoresFormulario.enCines){
      queryString.push(`proximosEstrenos=${valoresFormulario.enCines}`);
    }

    this.location.replaceState('peliculas/buscar', queryString.join('&'));

  }
  buscarPeliculas(valores:any){
    valores.pagina = this.paginaActual;
    valores.recordsPorPagina = this.cantidadElementosAMostrar;
    this.peliculasServices.filtrar(valores).subscribe(response =>{
      this.peliculas = response.body;
      this.escribirParametrosBusquedaEnURL();
      this.cantidadElementos = response.headers.get('cantidadTotalRegistros');
    })
  }
limpiar(){
  this.form.patchValue(this.formularioOriginal);
  }
  paginatorUpdate(datos: PageEvent){
    this.paginaActual = datos.pageIndex +1;
    this.cantidadElementosAMostrar = datos.pageSize;
    this.buscarPeliculas(this.form.value);
  }
}
