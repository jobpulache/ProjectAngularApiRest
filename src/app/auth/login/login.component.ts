import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { LoginViewmodelService } from '../../viewmodels/login-viewmodel.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario: string = ""
  password: string = ""
  mensaje: string | null = null

  constructor(private loginViewModel: LoginViewmodelService,
    private router: Router){

  }

  onLogin(){
    console.log("Login")
    this.loginViewModel.login(this.usuario, this.password)
    .subscribe({
      next: (response) => {
        //console.log(response)
        if(response.rpta){
          this.router.navigateByUrl("/dashboard")
          sessionStorage.setItem("login", response.idpersona)
        }else{
          this.mensaje = response.mensaje  
        }
      },
      error: (err) => {
        this.mensaje = "Ocurrió un error al intentar login"
        console.log(err)
      }
    })
  }


}
