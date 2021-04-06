import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {


  constructor(private FormBuilder: FormBuilder,
    
  private location: Location,
  private ActivatedRoute: ActivatedRoute) { }

  form: any = FormGroup;

  generos = [
    {id:1, nombre:'Drama'}, 
    {id: 2, nombre: 'Thriller'},
    {id: 3, nombre: 'Acción'},
    {id: 4, nombre: 'Anime'}

  ];


  peliculas = [
    {
      titulo: 'Spider-Man: Far From Home', enCines: false, proximoEstrenos: true, generos:[1,3], poster: 'https://m.media-amazon.com/images/M/MV5BNTMxOGI4OGMtMTgwMy00NmFjLWIyOTUtYjQ0OGQ4Mjk0YjNjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
      {titulo: 'Bleach', enCines: true, proximoEstrenos: false, generos:[4], poster: 'https://m.media-amazon.com/images/M/MV5BZjE0YjVjODQtZGY2NS00MDcyLThhMDAtZGQwMTZiOWNmNjRiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg'},
      {titulo: 'Contra Tiempo', enCines: false, proximoEstrenos: false, generos:[1,2], poster: 'https://m.media-amazon.com/images/M/MV5BMDk0YzAwYjktMWFiZi00Y2FmLWJmMmMtMzUyZDZmMmU5MjkzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR3,0,182,268_AL_.jpg'}
    ];

    peliculasOriginales = this.peliculas;

    formularioOriginal = {
      titulo: '',
      generoId: 0,
      proximoEstrenos: false,
      enCines: false
    }
  ngOnInit(): void {
    this.form = this.FormBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);


    this.form.valueChanges
    .subscribe((valores:any) => {
      this.peliculas = this.peliculasOriginales;
      this.buscarPeliculas(valores);
      this.escribirParametrosBusquedaEnURL();//ayuda a mantener las url en caso de compartir hace que este se incie con el filtro si fuese el caso
      
      // console.log(valores); //escuchado de cambios cuando el usuario escribe o selecciona algo
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
    if(valores.titulo){
      this.peliculas = this.peliculas.filter(peliculas => peliculas.titulo.indexOf(valores.titulo) !== -1)
    }
    if(valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(peliculas => peliculas.generos.indexOf(valores.generoId) !== -1)
    }
    if(valores.proximoEstrenos){
      this.peliculas = this.peliculas.filter(peliculas => peliculas.proximoEstrenos)
    }
    if(valores.enCines){
      this.peliculas = this.peliculas.filter(peliculas => peliculas.enCines)
    }
  }
limpiar(){
  this.form.patchValue(this.formularioOriginal);
  }
}
