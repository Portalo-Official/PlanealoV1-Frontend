import { format, parseISO } from 'date-fns';
import { Plan } from 'src/app/interfaces/Plan';
import { FormattedPlan, FormattedDate } from 'src/app/interfaces/PlanFormat';

const mappertMeses: { [key: string]: string } = {
  'January': 'ENE',
  'February': 'FEB',
  'March': 'MAR',
  'April': 'ABR',
  'May': 'MAY',
  'June': 'JUN',
  'July': 'JUL',
  'August': 'AGO',
  'September': 'SEP',
  'October': 'OCT',
  'November': 'NOV',
  'December': 'DIC'
};

export class DateUtils {
  
  /**
   * Formatea un string de fecha y hora en cuatro formatos separados: hora, día-mes, día del mes y nombre del mes.
   * @param dateTime - string de fecha y hora que vienen de LocalDateTime en java via JSON.
   * @returns  FormattedDate con la hora, el día-mes, el día del mes y el nombre del mes formateados.
   */
  static formatDateTime(dateTime?: string): FormattedDate{
    if(!dateTime) return { time: ``, dayMonth: ``, day: ``, monthName: `` };
    const parsedDate = parseISO(dateTime);
    const time = format(parsedDate, 'HH:mm'); // Formato de 24 horas
    const dayMonth = format(parsedDate, 'dd-MM');
    const day = format(parsedDate, 'dd');
    const monthName = mappertMeses[format(parsedDate, 'MMMM')] || format(parsedDate, 'MMMM');
    return { time, dayMonth, day, monthName };
  }

  /**
   * Convierte un objeto Plan en un objeto FormattedPlan.
   * @param plan - El objeto Plan a convertir.
   * @returns Un objeto FormattedPlan con las fechas formateadas.
   */
  static convertToFormattedPlan(plan: Plan): FormattedPlan {
    return {
      referencia: plan.referencia,
      titulo: plan.titulo,
      fechaCreacion: this.formatDateTime(plan.fechaCreacion),
      fechaFin: this.formatDateTime(plan.fechaFin? plan.fechaFin : undefined),
      ubicacionLatitud: plan.ubicacionLatitud,
      ubicacionAltitud: plan.ubicacionAltitud,
      descripcion: plan.descripcion,
      modo: plan.modo,
      miembros: plan.miembros,
    };
  }


}

