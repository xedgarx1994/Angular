import { generoDTO } from '../generos/genero';
import { cineDTO } from '../cines/cine';
export interface PeliculaCreacionDTO{
    titulo: string;
    resumen: string;
    enCines: boolean;
    fechaLanzamiento: Date;
    trailer: string;
    poster: File;
}

export interface PeliculaDTO{
    titulo: string;
    resumen: string;
    enCines: boolean;
    fechaLanzamiento: Date;
    trailer: string;
    poster: string;
}

export interface PeliculaPostGet{
    generos: generoDTO[];
    cines: cineDTO[];
}