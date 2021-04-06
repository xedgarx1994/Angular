import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';
import { NEVER } from 'rxjs';


@Component({
  selector: 'app-ratting',
  templateUrl: './ratting.component.html',
  styleUrls: ['./ratting.component.css']
})
export class RattingComponent implements OnInit {

  @Input()
  maximiorating=5;
  @Input()
  ratingseleccionado =0;
  @Output()
  rated : EventEmitter<number> = new EventEmitter<number>();
  maximoRatingArr = [] as any;
  votado = false;
  RatingAnterior = 0;

  constructor() { }

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximiorating).fill(0);
  }
  manejarMouseEnter(index:number):void{
    this.ratingseleccionado = index + 1;
  }
  manejarMouseLeave(){
    if(this.ratingseleccionado !== 0){
      this.ratingseleccionado = this.RatingAnterior;
    }else
    {
      this.ratingseleccionado = 0
    }
  }
  rate(index:number):void{
    this.ratingseleccionado = index +1;
    this.votado = true;
    this.RatingAnterior = this.ratingseleccionado;
    this.rated.emit(this.ratingseleccionado);
  }
}
