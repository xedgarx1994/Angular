import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  modelo: actorDTO = {nombre: 'Edgar', biografia: 'Pruebas', fechaNacimiento: new Date(), foto:'https://m.media-amazon.com/images/M/MV5BNjA0MTU2NDY3MF5BMl5BanBnXkFtZTgwNDU4ODkzMzE@._V1_UX214_CR0,0,214,317_AL_.jpg'}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
      {
        //alert(params.id)
      })
  }

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
  }
}
