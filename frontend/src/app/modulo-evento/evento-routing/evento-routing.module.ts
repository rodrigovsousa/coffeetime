import { EventoComponent } from './../components/evento/evento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: EventoComponent }

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
    exports: [RouterModule]
})
export class EventoRoutingModule { }
