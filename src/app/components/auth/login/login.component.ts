// login.component.ts
import { Component } from '@angular/core';
import {AdminService} from "../../../services/admin.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginRequest = {
    username: '',
    password: ''
  };

  constructor(private adminService: AdminService) {}

/*  onLogin(): void {
    this.adminService.login(this.loginRequest).subscribe(
      response => {
        console.log('Connexion réussie', response);
        // Rediriger vers /home après connexion réussie
      },
      error => {
        console.error('Erreur lors de la connexion', error);
      }
    );
  }*/

/*  onLoginWithGoogle(): void {
    this.adminService.loginWithGoogle();
  }*/
}
