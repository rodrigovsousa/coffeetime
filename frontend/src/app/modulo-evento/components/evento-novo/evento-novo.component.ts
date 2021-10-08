
import { HttpClient } from '@angular/common/http';
import { Select } from './../../../models/Select';
import { MessagemUtils } from './../../../shared/mensagens-util';
import { EventoService } from './../../../service/evento.service';
import { Router } from '@angular/router';


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, SelectItem } from 'primeng';
import Usuario from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import * as moment from 'moment';
import Evento from 'src/app/models/Evento';
import {MotivoService} from '../../../service/motivo.service';


@Component({
  selector: 'app-evento-novo',
  templateUrl: './evento-novo.component.html',
  styleUrls: ['./evento-novo.component.css']
})
export class EventoNovoComponent implements OnInit {

  public eventoForm: FormGroup;
  public fb: FormBuilder  = new FormBuilder();

  usuario: Usuario[];
  motivos: SelectItem[];
  public opcoesUsuarios: SelectItem[];
  public opcoesMotivos: SelectItem[];
  //cargos: SelectItem[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private eventoService: EventoService,
    private motivo: MotivoService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.criaFormulario();
    this.getUsuarios();
    this.getMotivo();

  }

  public formataMotivo(evento: Evento): void {
    evento.motivo = { value: this.eventoForm.get('motivo').value } as Select;
  }

  public criarEvento() {
    let idUsuariosSelecionados: number[] = this.opcoesUsuarios.map(opcaoUsuario => opcaoUsuario.value);
    this.eventoForm.get('patrocinadores').setValue(this.usuario.filter((usuarioLista: Usuario) => idUsuariosSelecionados.includes(usuarioLista.id)));
    let evento: Evento = this.eventoForm.getRawValue();
    this.formatarData(evento);
    this.formataMotivo(evento);
    console.log(evento)
    this.eventoService.criarEvento(evento).subscribe(() => { })
  }


  public getUsuarios(): void {
    this.usuarioService.getUsuario().subscribe((res) => {
      this.usuario = res;
      this.opcoesUsuarios = this.usuario.map((usuarioConsiderado: Usuario) => ({value: usuarioConsiderado.id, label: usuarioConsiderado.nome}));
  });
  }

    public getMotivo(): void {
        this.motivo.listar().subscribe((res) => {
            console.log(res)
            this.motivos = res;
            this.opcoesMotivos = this.motivos;
            this.opcoesMotivos.unshift({value: null, label: "Selecione"})
        });
    }

  public criaFormulario(): void {
    this.eventoForm = this.fb.group({
      id: [null],
      nome: [''],
      data: [''],
      valor: [''],
      motivo: [null, Validators.required],
        patrocinadores: [''],
    });
  }

  public cancelar(): void {
    this.router.navigateByUrl('/')
  }

  public formatarData(evento: Evento): void {
    let data: moment.Moment = moment.utc(this.eventoForm.value.data).local();
    evento.data = data.format('DD/MM/YYYY');
  }

 /* public criar(): void {
    if(!this.eventoForm.valid) {
      this.mensagem.add({ severity: 'error', summary: MessagemUtils.TITULO_DADOS_INVALIDOS, detail: MessagemUtils.MENSAGEM_ERRO_PREENCHIMENTO})
      return;
    }
    let evento: Evento = this.eventoForm.getRawValue();
    this.formatarData(evento);
    this.salvarUsuario(evento);
  }

  public salvarUsuario(evento: Evento): void {
    this.eventoService.criarEvento(this.evento).subscribe(() => {
      this.mensagem.add({ severity: 'success', summary: MessagemUtils.TITULO_SUCESSO, detail: MessagemUtils.MENSAGEM_DADOS_SALVOS });
      this.router.navigateByUrl('usuarios')
    })
  }*/

}
