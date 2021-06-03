import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { actorCreacionDTO, actorDTO } from './actor';
import { HttpClient, HttpParams } from '@angular/common/http';
import { formatearFecha } from '../utilidades/utilidades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + 'actores';

  public crear(actor: actorCreacionDTO){

    const formData = this.construirFormData(actor);
    return this.http.post(this.apiURL, formData);
  }
  private construirFormData(actor: actorCreacionDTO): FormData{
    const formData = new FormData();
    formData.append('nombre', actor.nombre);
    if(actor.biografia){

      formData.append('biografia', actor.biografia);
    }
    if(actor.fechaNacimiento){
      formData.append('fechaNacimiento', formatearFecha(actor.fechaNacimiento));
    }
    if(actor.foto){
      formData.append('foto', actor.foto);
    }
    return formData;
  }

  public obtenerTodos(pagina: number, cantidadRegistroAMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('RecordPorPagina', cantidadRegistroAMostrar.toString());
    return this.http.get<actorDTO[]>(this.apiURL, {observe: 'response', params})
  }

  public borrar(id:number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
