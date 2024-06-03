import { Usuario } from "./Usuario";

export interface Plan {
    referencia: string;
    fechaCreacion: string; // Usamos string porque en JSON las fechas suelen ser representadas como cadenas
    fechaFin: string;
    ubicacionLatitud: number;
    ubicacionAltitud: number;
    descripcion: string;
    modo: string;
    usuarios: Usuario[];
}