import { CargoService } from './../../../service/cargo.service';
import { UsuarioService } from './../../../service/usuario.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { MessageService, SelectItem } from 'primeng/api';
import { MessagemUtils } from 'src/app/shared/mensagens-util';
import { Select } from 'src/app/models/Select';
import Usuario from 'src/app/models/Usuario';



@Component({
  selector: 'app-usuario-novo',
  templateUrl: './usuario-novo.component.html',
  styleUrls: ['./usuario-novo.component.css']
})
export class UsuarioNovoComponent implements OnInit {

  public usuarioForm: FormGroup;
  public fb: FormBuilder = new FormBuilder();

  cargos: SelectItem[] = [];

  constructor(
    private service: UsuarioService,
    private router: Router,
    private cargoService: CargoService,
    private mensagem: MessageService) {

  }

  ngOnInit(): void {
    this.criaFormulario();
   this.listaCargos();

  }

  public listaCargos(): void {
    this.cargoService.buscarTodos().subscribe(res => {
      this.cargos = res;
      this.cargos.unshift({value: null, label: "Selecione"}) 
    })
  }

  public criaFormulario(): void {
    this.usuarioForm = this.fb.group({
      id: [null],
      patrocinador: ['', Validators.required],
      email: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: [''],
      status: [true],
      cargo: [null, Validators.required]
    });
  }

  public cancelar(): void {
    this.router.navigateByUrl('/')
  }

  public formatarData(usuario: Usuario): void {
    let data: moment.Moment = moment.utc(this.usuarioForm.value.dataNascimento).local();
    usuario.dataDeNascimento = data.format('DD/MM/YYYY');
  }

  public formataCargo(usuario: Usuario): void {
    usuario.cargo = { value: this.usuarioForm.get('cargo').value } as Select;
  }

  public criar(): void {
    if(!this.usuarioForm.valid) {
      this.mensagem.add({ severity: 'error', summary: MessagemUtils.TITULO_DADOS_INVALIDOS, detail: MessagemUtils.MENSAGEM_ERRO_PREENCHIMENTO})
      return;
    }
    let usuario: Usuario = this.usuarioForm.getRawValue();
    this.formatarData(usuario);
    this.formataCargo(usuario);
    this.salvarUsuario(usuario);
  }

  public salvarUsuario(usuario: Usuario): void {
    this.service.criarUsuario(usuario).subscribe(() => {
      this.mensagem.add({ severity: 'success', summary: MessagemUtils.TITULO_SUCESSO, detail: MessagemUtils.MENSAGEM_DADOS_SALVOS });
      this.router.navigateByUrl('usuarios')
    })
  }

}