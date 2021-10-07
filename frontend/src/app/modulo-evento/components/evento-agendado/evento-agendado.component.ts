import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Calendar } from '@fullcalendar/core';
import { EventoService } from 'src/app/service/evento.service';
import EventoCalendar from 'src/app/models/Evento-Calendar';
import { title } from 'process';

@Component({
  selector: 'app-evento-agendado',
  templateUrl: './evento-agendado.component.html',
  styleUrls: ['./evento-agendado.component.css']
})

export class EventoAgendadoComponent implements OnInit {

  calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth'
  };

    events: EventoCalendar[];
    options: any;

  constructor(private eventoService: EventoService) {
    const name = Calendar.name;
  }

  ngOnInit(): void {
    this.obterEventos();
    this.construirOptions();
}

public obterEventos(){
  this.eventoService.getEventoCalendar().subscribe((res) => this.events = res);

}

public construirOptions(){
  this.options = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    defaultDate: '2021-10-08',
    header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
    }
}
}
}
