import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class EventoService {

    constructor(private http: HttpClient) { }

    getEvents() {
        return this.http.get('/calendarevents.json')
    }
}
