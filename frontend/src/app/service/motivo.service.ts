import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { SelectItem } from 'primeng';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import UsuarioListagem from '../models/UsuarioListagem';

@Injectable({
    providedIn: "root",
})
export class MotivoService {
  private readonly PATH = environment.apiUrl + "/motivos/";

    constructor(private http: HttpClient) {}

    buscarTodos(): Observable<SelectItem[]> {
      const url = this.PATH
      return this.http.get<SelectItem[]>(url);
    }

    listar() {
      return this.http.get<SelectItem[]>(this.PATH)

    }
}
