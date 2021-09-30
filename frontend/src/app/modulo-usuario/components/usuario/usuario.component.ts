
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { UsuarioService } from './usuario.service';
import Usuario from "../../models/Usuario";
import { ConfirmationService } from "primeng/api";
import { MessageService } from "primeng/api";


@Component({
    selector: "app-usuario",
    templateUrl: './usuario.component.html',
    styleUrls: ["./usuario.component.css"],
})
export class UsuarioComponent implements OnInit {

    clienteDialog: boolean;
    usuarios: Usuario[];

    usuario: Usuario;

    displayForm = false;

    usuarioForm;

    constructor(
        private usuarioService: UsuarioService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) { }

    ngOnInit() {
        this.usuarioForm = new FormGroup({
            id: new FormControl(""),
            nome: new FormControl("", [Validators.required]),
            cpf: new FormControl("", Validators.required),
            rg: new FormControl("", Validators.required),
            dataNascimento: new FormControl("", Validators.required),
            endereco: new FormControl("", Validators.required),
            email: new FormControl("", [Validators.email,Validators.required]),
            telefone: new FormControl("", Validators.required)
        });
        this.getUsuario();
    }

    getUsuario() {
        this.usuarioService.getUsuario().subscribe((resultado) => {
            this.usuarios = resultado;
        });
    }
}