import { Miembros } from './Plan';

export interface FormattedDate {
    time: string;
    dayMonth: string;
    day: string;
    monthName: string;
  }

export interface FormattedPlan {
    referencia: string;
    titulo: string;
    fechaCreacion: FormattedDate;
    fechaFin?: FormattedDate;
    ubicacionLatitud: number | null;
    ubicacionAltitud: number | null;
    descripcion: string;
    modo: string;
    miembros?: Miembros[];
  }