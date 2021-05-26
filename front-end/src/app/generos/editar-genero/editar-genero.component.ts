import { Component, OnInit } from '@angular/core';
import { generoCreacionDTO, generoDTO } from '../genero';
import { ActivatedRoute, Router } from '@angular/router';
import { GenerosService } from '../generos.service';
import { parsearErroresAPI } from '../../utilidades/utilidades';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private router: Router, 
    private generosService: GenerosService,
    private activatedRoute: ActivatedRoute) { }

  modelo: generoDTO | any;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
      {
        this.generosService.obtenerPorId(params.id)
        .subscribe(genero => {
          this.modelo = genero;
        }, () => this.router.navigate(['/generos']))
      })
  }
  GuardarCambios(genero: generoCreacionDTO){
    //..guardar los cambios
    console.log(genero);
    this.generosService.editar(this.modelo.id, genero)
    .subscribe(() => {
      this.router.navigate(['/generos'])
    }, error => this.errores = parsearErroresAPI(error))
    
  }
}
