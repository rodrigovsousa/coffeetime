import { EventService } from './../../../service/evento.service';
import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';



@Component({
  selector: 'app-evento-agendado',
  templateUrl: './evento-agendado.component.html',
  styleUrls: ['./evento-agendado.component.css']
})
export class EventoAgendadoComponent implements OnInit {

 events =  JSON.parse("{}")

 options: any;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {this.events = events;})

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: '2017-02-01',
      header: {
          left: 'prev,next',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
      }
  }
}
     
}

