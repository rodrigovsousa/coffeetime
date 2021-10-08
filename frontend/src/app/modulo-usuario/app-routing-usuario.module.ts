import { UsuarioNovoComponent } from './components/usuario-novo/usuario-novo.component';
import { UsuarioListarComponent } from './components/usuario-listar/usuario-listar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', component: UsuarioListarComponent },
    { path: 'cadastrar', component: UsuarioNovoComponent }
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
    exports: [RouterModule]
})
export class AppRoutingUsuarioModule { }
