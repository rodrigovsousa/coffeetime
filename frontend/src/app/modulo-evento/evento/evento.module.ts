import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoRoutingModule } from '../evento-routing/evento-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EventoRoutingModule,
    SharedModule
  
  ]
})
export class EventoModule { }
