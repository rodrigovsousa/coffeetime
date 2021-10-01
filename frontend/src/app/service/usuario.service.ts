import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import Usuario from "../models/Usuario";

@Injectable({
    providedIn: "root",
})
export class UsuarioService {
    private readonly PATH = environment.apiUrl + "/usuario/";

    constructor(private http: HttpClient) {}

    getUsuario() {
        return this.http.get<Usuario[]>(this.PATH);
    }

    getUsuarioById(id) {
        return this.http.get<Usuario>(this.PATH + id);
    }
    postUsuario(Usuario: Usuario) {
        return this.http.post(this.PATH, Usuario);
    }

    putUsuario(usuario: Usuario) {
        return this.http.put(this.PATH, usuario);
    }
    deleteUsuario(id) {
        return this.http.delete(this.PATH + id);
    }
}