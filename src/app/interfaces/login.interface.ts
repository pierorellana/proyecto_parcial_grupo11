export interface Usuario {
    usuarioId: number;
    nombreUsuario: string;
    apellido: string;
    correo: string;
    contraseña: string | null;
    rolId: number;
  }