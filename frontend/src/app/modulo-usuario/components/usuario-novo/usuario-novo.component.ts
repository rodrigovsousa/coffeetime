import { UsuarioService } from './../../../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import Usuario from 'src/app/models/Usuario';

@Component({
  selector: 'app-usuario-novo',
  templateUrl: './usuario-novo.component.html',
  styleUrls: ['./usuario-novo.component.css']
})
export class UsuarioNovoComponent implements OnInit {

  usuario: Usuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }
  createUser(): void {
    this.usuarioService.criarUsuario(this.usuario).subscribe((rescultadoCriar) => {
      this.usuario = rescultadoCriar;
    })
  }
}