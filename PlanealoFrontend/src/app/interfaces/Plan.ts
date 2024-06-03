import { Usuario } from "./Usuario";

export interface Plan {
    referencia: string;
    titulo: string;
    fechaCreacion: string; // Usamos string porque en JSON las fechas suelen ser representadas como cadenas
    fechaFin: string | null;
    ubicacionLatitud: number | null; 
    ubicacionAltitud: number | null;
    descripcion: string;
    modo: string;
    usuarios?: Usuario[];
}