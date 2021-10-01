import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventoService {

    constructor(private http: HttpClient) { }

    getEventos() {
    return this.http.get<any>('assets/scheduleevents.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
    }
}