import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformesModule } from './info/informes/informes.module';
import { LoginModule } from './info/login/login.module';
import { NuevoInformeModule } from './info/nuevo-informe/nuevo-informe.module';
import { PacientesModule } from './info/pacientes/pacientes.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InformesModule,
    LoginModule,
    NuevoInformeModule,
    PacientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
