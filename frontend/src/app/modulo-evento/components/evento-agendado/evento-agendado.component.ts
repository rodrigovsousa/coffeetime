import { Component, OnInit } from '@angular/core';
import {FullCalendar} from 'primeng/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Calendar } from '@fullcalendar/core';
import { EventoService } from 'src/app/service/evento.service';

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

    eventos: any[];
    options: any;

  constructor(private eventoService: EventoService) { 
    const name = Calendar.name; 
  }

  ngOnInit(): void {
    this.eventoService.getEventos().then(eventos => {this.eventos = eventos; } );
        
        this.options = {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            defaultDate: '2017-02-01',
            header: {
                left: 'Anterior,Próximo',
                center: 'title',
                right: 'mes,agendaSemana,agendaDia'
            },
            editable: true
    };
  }
}
