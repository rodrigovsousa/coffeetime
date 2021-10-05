import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { SelectItem } from 'primeng';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import UsuarioListagem from '../models/UsuarioListagem';

@Injectable({
    providedIn: "root",
})
export class CargoService {
  private readonly PATH = environment.apiUrl + "/cargo/";
    
    constructor(private http: HttpClient) {}

    buscarTodos(): Observable<UsuarioListagem[]> {
      const url = `${this.PATH}`;
      return this.http.get<UsuarioListagem[]>(url);
    }

    listar() {
      return this.http.get<SelectItem[]>(this.PATH)
      
    }
}