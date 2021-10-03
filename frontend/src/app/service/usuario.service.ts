import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import Usuario from "../models/Usuario";

@Injectable({
    providedIn: "root",
})
export class UsuarioService {
    private readonly PATH = environment.apiUrl + "/usuarios/";

    constructor(private http: HttpClient) {}

    getUsuario() {
        return this.http.get<Usuario[]>(this.PATH);
    }
}