
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import EventoCalendar from '../models/Evento-Calendar';
import Evento from '../models/Evento';

@Injectable({
  providedIn: "root",
})
export class EventoService {

    constructor(private http: HttpClient) { }
    private readonly PATH = environment.apiUrl + "/eventos/";    

    getEventoCalendar(): Observable<EventoCalendar[]> {
        return this.http.get<EventoCalendar[]>(this.PATH.concat('calendario'));
    }

    criarEvento(evento: Evento) {
      return this.http.post<Evento>(this.PATH, evento);
  }

  getEventos() {
    return this.http.get<Evento[]>(this.PATH);
}

}
