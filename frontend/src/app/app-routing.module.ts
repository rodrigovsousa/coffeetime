import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiarioErrosComponent } from './components/diario-erros/diario-erros.component';
import { LoginSuccessComponent } from '@nuvem/angular-base';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: 'diario-erros', component: DiarioErrosComponent, data: { breadcrumb: 'Diário de Erros'} },
    { path: 'login-success', component: LoginSuccessComponent },
    { path: '', component: HomeComponent},
    { path: 'usuario', loadChildren: './modulo-usuario/modulo-usuario.module#ModuloUsuarioModule'},
    { path: 'evento', loadChildren: './modulo-evento/evento/evento.module#EventoModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
