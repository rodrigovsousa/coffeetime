import { EventoAgendadoComponent } from './../components/evento-agendado/evento-agendado.component';
import { EventoNovoComponent } from './../components/evento-novo/evento-novo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: EventoNovoComponent },
  { path: 'agendado', component: EventoAgendadoComponent}

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
    exports: [RouterModule]
})
export class EventoRoutingModule { }