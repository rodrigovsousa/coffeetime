
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioListarComponent } from './components/usuario-listar/usuario-listar.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingUsuarioModule } from './app-routing-usuario.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioNovoComponent } from './components/usuario-novo/usuario-novo.component';

@NgModule({
  declarations: [
    UsuarioListarComponent,
    UsuarioComponent,
    UsuarioNovoComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingUsuarioModule,
    SharedModule, 
    ReactiveFormsModule
  ],
})
export class ModuloUsuarioModule { }
