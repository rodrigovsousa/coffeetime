import { EventoAgendadoComponent } from './../components/evento-agendado/evento-agendado.component';
import { UsuarioComponent } from './../../modulo-usuario/components/usuario/usuario.component';
import { EventoService } from 'src/app/service/evento.service';

import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoRoutingModule } from '../evento-routing/evento-routing.module';
import { EventoComponent } from '../components/evento/evento.component';
import { EventoNovoComponent } from '../components/evento-novo/evento-novo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EventoComponent,
    EventoNovoComponent 
  ],
  imports: [
    CommonModule,
    EventoRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EventoModule { }
