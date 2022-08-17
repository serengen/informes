import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformesComponent } from './info/informes/informes.component';
import { LoginComponent } from './info/login/login.component';
import { NuevoInformeComponent } from './info/nuevo-informe/nuevo-informe.component';
import { PacientesComponent } from './info/pacientes/pacientes.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'informes',
    component: InformesComponent,
  },
  {
    path: 'nuevo',
    component: NuevoInformeComponent
  },
  {
    path: 'pacientes',
    component: PacientesComponent,
  },
  {
    path: '**',
    redirectTo: '/login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
