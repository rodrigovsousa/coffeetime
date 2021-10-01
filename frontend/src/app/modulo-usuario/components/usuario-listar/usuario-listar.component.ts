import { Component, OnInit } from '@angular/core';
import Usuario from 'src/app/models/Usuario';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {

  usuario: Usuario[];
  constructor() { }

  ngOnInit(): void {
  }

}
