import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';


const routes: Routes = [
    { path: '', component: UsuarioComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
    exports: [RouterModule]
})
export class AppRoutingUsuarioModule { }
