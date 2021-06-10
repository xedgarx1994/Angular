import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generoDTO, generoCreacionDTO } from 'src/app/generos/genero';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { cineCreacionDTO, cineDTO } from '../cine';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor(private router: Router, 
    private cinesService: CinesService,
    private activatedRoute: ActivatedRoute) { }

  modelo: cineDTO | any;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
      {
        this.cinesService.obtenerPorId(params.id)
        .subscribe(cine => {
          this.modelo = cine;
        }, () => this.router.navigate(['/cines']))
      })
  }
  guardarCambios(cine: cineCreacionDTO){
    //..guardar los cambios
    console.log(cine);
    this.cinesService.editar(this.modelo.id, cine)
    .subscribe(() => {
      this.router.navigate(['/cines'])
    }, error => this.errores = parsearErroresAPI(error))
    
  }

}
