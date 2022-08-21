import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

interface informes {
  nombre: string,
  fecha: string,
  descripcion: string,
}
@Component({
  selector: 'app-nuevo-informe',
  templateUrl: './nuevo-informe.component.html',
  styleUrls: ['./nuevo-informe.component.css']
})
export class NuevoInformeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.id = id)
    );
  }
  id: number = 0;
  informe: informes = 
  {
    nombre: 'tomás navarro',
    fecha: '13/08/2022',
    descripcion: '',
  };

}
