import { SelectItem } from 'primeng/api';

import { Component, OnInit } from '@angular/core';
import Evento from 'src/app/models/Evento';
import { EventoService } from 'src/app/service/evento.service';

@Component({
  selector: 'app-evento-listar',
  templateUrl: './evento-listar.component.html',
  styleUrls: ['./evento-listar.component.css']
})
export class EventoListarComponent implements OnInit {

  evento: Evento[];


  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.eventoService.getEventos().subscribe((resultado) => {
      this.evento = resultado;
  });
  }

}
