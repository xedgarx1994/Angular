export interface credencialesUsuario{
    email:string;
    password: string;
}

export interface respuestaAutenticacion{
    token: string;
    expiracion: Date;
}