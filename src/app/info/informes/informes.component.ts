import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent {

  informes: any[] = [
    {
      id: 2,
      fecha: '07/08/2022'
    },
    {
      id: 3,
      fecha: '08/08/2022'
    },
    {
      id: 4,
      fecha: '09/08/2022'
    },
    {
      id: 17,
      fecha: '10/08/2022'
    }
];



}
