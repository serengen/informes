import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformesComponent } from './info/informes/informes.component';
import { LoginComponent } from './info/login/login.component';
import { MensualComponent } from './info/mensual/mensual.component';
import { NuevoInformeComponent } from './info/nuevo-informe/nuevo-informe.component';
import { PacientesComponent } from './info/pacientes/pacientes.component';
import { VerInformeComponent } from './info/ver-informe/ver-informe.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'informes/:id',
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
    path: 'ver_informe/:id',
    component: VerInformeComponent
  },
  {
    path: 'mensual',
    component: MensualComponent
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
