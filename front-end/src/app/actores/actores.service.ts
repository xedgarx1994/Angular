import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { actorCreacionDTO, actorDTO, actorPeliculaDTO } from './actor';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { formatearFecha } from '../utilidades/utilidades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + 'actores';

  public obtenerPorId(id: number): Observable<actorDTO>{
    return this.http.get<actorDTO>(`${this.apiURL}/${id}`)
  }

  public obtenerPorNombre(nombre: string): Observable<actorPeliculaDTO[]>{
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post<actorPeliculaDTO[]>(`${this.apiURL}/buscarPorNombre`,
    JSON.stringify(nombre), {headers});
  }

  public crear(actor: actorCreacionDTO){

    const formData = this.construirFormData(actor);
    return this.http.post(this.apiURL, formData);
  }

  public editar(id: number, actor: actorCreacionDTO){

    const formData = this.construirFormData(actor);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }
  private construirFormData(actor: actorCreacionDTO): FormData{
    const formData = new FormData();
    formData.append('nombre', actor.nombre);
    if(actor.biografia){

      formData.append('biografia', actor.biografia);
    }
      formData.append('fechaNacimiento', formatearFecha(actor.fechaNacimiento));
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
