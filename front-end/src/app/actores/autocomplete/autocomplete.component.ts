import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  constructor() { }

  control: FormControl = new FormControl();

  actores = [{nombre: 'Jake Gyllenhaal', personaje: '', foto: 'https://m.media-amazon.com/images/M/MV5BNjA0MTU2NDY3MF5BMl5BanBnXkFtZTgwNDU4ODkzMzE@._V1_UX214_CR0,0,214,317_AL_.jpg'},
  {nombre: 'Tom Hardy', personaje: '', foto: 'https://m.media-amazon.com/images/M/MV5BMTQ3ODEyNjA4Nl5BMl5BanBnXkFtZTgwMTE4ODMyMjE@._V1_UX214_CR0,0,214,317_AL_.jpg'},
  {nombre: 'Jake J. Meniani', personaje: '', foto: 'https://m.media-amazon.com/images/M/MV5BYzVjYWM0ZTUtMzg5Ny00NDdmLWJkMTEtNGQ5OGFjZTQ4OGE3XkEyXkFqcGdeQXVyNTQzOTQ3OTU@._V1_UY317_CR20,0,214,317_AL_.jpg'}]  

  actoresOriginal = this.actores;

  actoresSeleccionados =[] as any;

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table: MatTable<any> | any;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor => {
      this.actores = this.actoresOriginal;
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !== -1)
    })
  }

  opcionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
    if(this.table !== undefined){
      this.table.renderRows();
    }
  }

  eliminar(actor: any){
    const indice = this.actoresSeleccionados.findIndex((a:any)  => a.nombre === actor.nombre);
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
  }

  finalizaArrastre(event: CdkDragDrop<any[]>){
    const indicePrevio = this.actoresSeleccionados.findIndex(
      (actor:any) => actor === event.item.data
    )
    moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);
    this.table.renderRows();
  }
}
