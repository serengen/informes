import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformesComponent } from './informes.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    InformesComponent
  ],
  exports:[
    InformesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class InformesModule { }
