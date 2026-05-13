import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuario = 'Samuel';
  contrasena = '1234';
  usuarioIngresar = '';
  contrasenaIngresar = '';
  textoFinal = '';

  validar(usuarioIngresar: string, contrasenaIngresar: string): void {
    this.usuarioIngresar = usuarioIngresar;
    this.contrasenaIngresar = contrasenaIngresar;
    if (this.usuarioIngresar === this.usuario && this.contrasenaIngresar === this.contrasena) {
      this.textoFinal = 'Bienvenido';
    } else {
      this.textoFinal = 'Inicio de sesion fallido ';
    }
  }
}
