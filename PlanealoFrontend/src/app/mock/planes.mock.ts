import { Plan } from "../interfaces/Plan";

export const planes: Plan[] = [
    {
        referencia: "PLN001",
        titulo: "Viaje a la Montana",
        fechaCreacion: "2024-01-01T09:00:00Z",
        fechaFin: "2024-01-10T18:00:00Z",
        ubicacionLatitud: 40.7128,
        ubicacionAltitud: -74.0060,
        descripcion: "Una emocionante aventura en la montana.",
        modo: "aventura"
    },
    {
        referencia: "PLN002",
        titulo: "Excursion a la Playa",
        fechaCreacion: "2024-02-15T10:30:00Z",
        fechaFin: "2024-02-20T16:00:00Z",
        ubicacionLatitud: 36.7783,
        ubicacionAltitud: -119.4179,
        descripcion: "Un relajante viaje a la playa.",
        modo: "relajación"
    },
    {
        referencia: "PLN003",
        titulo: "Visita Cultural a la Ciudad",
        fechaCreacion: "2024-03-10T08:00:00Z",
        fechaFin: "2024-03-15T20:00:00Z",
        ubicacionLatitud: 34.0522,
        ubicacionAltitud: -118.2437,
        descripcion: "Explora los museos y lugares históricos de la ciudad.",
        modo: "cultural"
    },
    {
        referencia: "PLN004",
        titulo: "Aventura en el Desierto",
        fechaCreacion: "2024-04-05T07:00:00",
        fechaFin: "2024-04-12T19:00:00",
        ubicacionLatitud: 25.7617,
        ubicacionAltitud: -80.1918,
        descripcion: "Un viaje lleno de adrenalina en el desierto.",
        modo: "aventura"
    }
  ];