import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    PacientesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PacientesModule { }
