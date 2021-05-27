export interface actorDTO{
    nombre: string,
    biografia: string,
    fechaNacimiento: Date,
    foto: string;
}

export interface actorCreacionDTO{
    nombre: string,
    biografia: string,
    fechaNacimiento: Date,
    foto: File;
}