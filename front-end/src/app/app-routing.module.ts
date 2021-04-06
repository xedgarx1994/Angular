import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndicesGenerosComponent } from './generos/indices-generos/indices-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActoresComponent } from './actores/crear-actores/crear-actores.component';
import { IndiceCineComponent } from './cines/indice-cine/indice-cine.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'generos',component :IndicesGenerosComponent},
  {path: 'generos/crear', component:CrearGeneroComponent},

  {path: 'actores',component :IndiceActoresComponent},
  {path: 'actores/crear', component:CrearActoresComponent},
  {path: 'actores/editar/:id', component: EditarActorComponent},
  {path: 'cines/editar/:id', component: EditarCineComponent},
  {path: 'peliculas/editar/:id', component: EditarPeliculaComponent},
  {path: 'generos/editar/:id', component: EditarGeneroComponent},
  {path: 'peliculas/buscar', component: FiltroPeliculasComponent},

  {path: 'cines',component :IndiceCineComponent},
  {path: 'cines/crear', component:CrearCineComponent},

  {path: 'peliculas/crear', component:CrearPeliculaComponent},
  {path: '**', redirectTo: ''} //ayuda a poner en el inicio si no se encontro la ruta. WILDCARD '**'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
