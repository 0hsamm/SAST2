import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  usuario: string = "Samuel";
  contrasena: string = "1234";
  usuarioIngresar: string = "";
  contrasenaIngresar: string = "";
  validar(usuario:string, contrasena:string): void {
    if(this.usuarioIngresar == this.usuario && this.contrasenaIngresar == this.contrasena){
      alert("Bienvenido");
    }else{
      alert("Usuario o contraseña incorrecto")
    }
  }

}
