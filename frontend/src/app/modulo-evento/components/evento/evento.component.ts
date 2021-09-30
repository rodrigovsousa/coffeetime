import { Component, OnInit } from '@angular/core';
import Evento from 'src/app/models/Evento';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  eventos: Evento[];

  constructor() { }

  ngOnInit(): void {
  }

}
