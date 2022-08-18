import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {
  
  pacientes: any[] = [
    {
      id: 2,
      nombre: 'tomas navarro'
    },
    {
      id: 1234,
      nombre: 'gustavo navarro'
    },
    {
      id: 5,
      nombre: 'juan perez'
    },
    {
      id: 75,
      nombre: 'pedro perez'
    },
    {
      id: 16,
      nombre: 'jose perez'
    }
  ];
}
