import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoRoutingModule } from '../evento-routing/evento-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EventoRoutingModule,
    SharedModule

  ]
})
export class EventoModule { }
