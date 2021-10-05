import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import Usuario from "../models/Usuario";
import UsuarioListagem from '../models/UsuarioListagem';

@Injectable({
    providedIn: "root",
})
export class UsuarioService {
    private readonly PATH = environment.apiUrl + "/usuarios/";

    constructor(private http: HttpClient) {}

    

    getUsuario() {
        return this.http.get<Usuario[]>(this.PATH);
    }

    criarUsuario(usuario: Usuario) {
        return this.http.post<Usuario>(this.PATH, usuario);
    }

    buscarPorId(id: any): Observable<Usuario> {
        const url = `${this.PATH}/${id}`;
        return this.http.get<Usuario>(url);
      }

      ativarUsuario(id : any) : Observable<Usuario> {
        const url = `${this.PATH}/ativar/${id}`;
        return this.http.put<Usuario>(url, null);
      }  

      desativarUsuario(id : any) : Observable<Usuario>{
        const url = `${this.PATH}/desativar/${id}`;
        return this.http.put<Usuario>(url, null);
      }  

}