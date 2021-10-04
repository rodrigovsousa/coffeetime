import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class EventoService {

    constructor(private http: HttpClient) { }

    getEventos() {
    return this.http.get('modulo-evento\components\evento-agendado\calendarevents.json')
    }
}