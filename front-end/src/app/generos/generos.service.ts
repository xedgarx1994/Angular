import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { generoCreacionDTO, generoDTO } from './genero';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'generos';

  public obtenerTodos(): Observable<any>{
    return this.http.get<generoDTO[]>(this.apiURL, {observe: 'response'})
  }
  public crear(genero: generoCreacionDTO){
    return this.http.post(this.apiURL, genero);
  }
}
