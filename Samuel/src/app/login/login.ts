import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  usuario ="Samuel";
  contrasena = "1234";
  usuarioIngresar = "";
  contrasenaIngresar = "";
  validar(): void {
    if(this.usuarioIngresar === this.usuario && this.contrasenaIngresar === this.contrasena){
      console.log("Bienvenido");
    }else{
      console.log("Usuario o contraseña incorrecto")
    }
  }

}
