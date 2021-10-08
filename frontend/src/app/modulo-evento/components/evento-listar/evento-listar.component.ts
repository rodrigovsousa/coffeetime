import { SelectItem } from 'primeng/api';

import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/service/evento.service';
import ConsutaEvento from '../../../models/ConsutaEvento';

@Component({
  selector: 'app-evento-listar',
  templateUrl: './evento-listar.component.html',
  styleUrls: ['./evento-listar.component.css']
})
export class EventoListarComponent implements OnInit {

  evento: ConsutaEvento[];


  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.eventoService.getEventos().subscribe((resultado) => {
      this.evento = resultado;
      this.evento.forEach(evento => {
          evento.nomesPatrocinadores = evento.patrocinadores.map(it => it.nome ).join(',');
      });
  });
  }

}
