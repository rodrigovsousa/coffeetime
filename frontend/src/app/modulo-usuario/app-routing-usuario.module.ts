import { UsuarioListarComponent } from './components/usuario-listar/usuario-listar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';


const routes: Routes = [
    { path: 'usuario', component: UsuarioComponent }, {
      path: '', component: UsuarioListarComponent
    }
    

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingUsuarioModule { }
