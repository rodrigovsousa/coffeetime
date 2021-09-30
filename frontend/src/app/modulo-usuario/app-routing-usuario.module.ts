import { UsuarioComponent } from './../Usuario/usuario/usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', component: UsuarioComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingUsuarioModule { }
