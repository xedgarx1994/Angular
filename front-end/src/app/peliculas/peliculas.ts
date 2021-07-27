import { generoDTO } from '../generos/genero';
import { cineDTO } from '../cines/cine';
import { actorPeliculaDTO } from '../actores/actor';
export interface PeliculaCreacionDTO{
    titulo: string;
    resumen: string;
    enCines: boolean;
    fechaLanzamiento: Date;
    trailer: string;
    poster: File;
    generosIds: number[];
    actores: actorPeliculaDTO[];
    cinesIds: number[];
}

export interface PeliculaDTO{
    id: number;
    titulo: string;
    resumen: string;
    enCines: boolean;
    fechaLanzamiento: Date;
    trailer: string;
    poster: string;
    generos: generoDTO[];
    actores: actorPeliculaDTO[];
    cines: cineDTO[];
}

export interface PeliculaPostGet{
    generos: generoDTO[];
    cines: cineDTO[];
}

export interface LandingPageDTO{
    enCines: PeliculaDTO[];
    proximosEstrenos: PeliculaDTO[];
}