import { Component, OnInit, Input } from '@angular/core';
// import { UsuarioService } from '../../../service/usuario.service';
import Usuario from "../../../models/Usuario";


@Component({
    selector: "app-usuario",
    templateUrl: './usuario.component.html',
    styleUrls: ["./usuario.component.css"],
})
export class UsuarioComponent implements OnInit {

    usuarios: Usuario[];

    cols: any[];

    _selectedColumns: any[];

    constructor(
        //private usuarioService: UsuarioService,
    ) { }

    ngOnInit() {
        //this.usuarioService.getUsuario().subscribe(data => this.usuarios = data);
    }


}
