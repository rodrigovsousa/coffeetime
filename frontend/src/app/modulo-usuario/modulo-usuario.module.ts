import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingUsuarioModule } from './app-routing-usuario.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingUsuarioModule,
    SharedModule
  ]
})
export class ModuloUsuarioModule { }
