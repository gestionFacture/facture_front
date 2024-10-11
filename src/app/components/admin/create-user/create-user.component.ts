import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { AppUser } from '../../../models/user.model';
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']  // Correction de `styleUrl` à `styleUrls`
})

export class CreateUserComponent {
  appUser: AppUser = {
    username: '',
    password: '',
    verifyPassword: '',
    email: '',
    numeroTelephone: '',
  };

  constructor(private adminService: AdminService, private router: Router) {}

  createUser(): void {
        this.adminService.createUser(this.appUser).subscribe({
      next: (createdUser) => {
        console.log('Utilisateur ajouté avec succès', createdUser);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur', err);
      }
    });
  }



}
