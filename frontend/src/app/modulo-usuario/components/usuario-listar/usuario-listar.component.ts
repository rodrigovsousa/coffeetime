import { UsuarioService } from './../../../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import Usuario from 'src/app/models/Usuario';


@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {

  usuario: Usuario[];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe((resultado) => {
      this.usuario = resultado;
  });
  }

}
