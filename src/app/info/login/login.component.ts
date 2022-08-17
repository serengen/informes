import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('usuario') usuario!:ElementRef<HTMLInputElement>;
  @ViewChild('contrasena') contrasena!:ElementRef<HTMLInputElement>;

  login() {
    if (this.usuario.nativeElement.value === '' || this.contrasena.nativeElement.value === '') {
      return;
    }
    
  }


}
