import { Component, OnInit } from '@angular/core';
import Usuario from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-evento-novo',
  templateUrl: './evento-novo.component.html',
  styleUrls: ['./evento-novo.component.css']
})
export class EventoNovoComponent implements OnInit {

usuario: Usuario[];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  public getUsuarios(): void {
    this.usuarioService.getUsuario().subscribe((resultado) => {
      this.usuario = resultado;
  });
  }

}
