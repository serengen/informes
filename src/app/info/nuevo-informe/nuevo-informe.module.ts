import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoInformeComponent } from './nuevo-informe.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    NuevoInformeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class NuevoInformeModule { }
