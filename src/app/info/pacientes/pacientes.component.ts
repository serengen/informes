import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {
  
  pacientes: any[] = ['tomas navarro','gustavo navarro','juan perez','pedro perez','jose perez'];
}
