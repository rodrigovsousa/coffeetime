import { EventoComponent } from './../components/evento/evento.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: EventoComponent }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EventoRoutingModule { }
