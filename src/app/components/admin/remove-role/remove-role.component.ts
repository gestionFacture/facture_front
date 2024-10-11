import { Component } from '@angular/core';
import {AppUser} from "../../../models/user.model";
import {AdminService} from "../../../services/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-remove-role',
  templateUrl: './remove-role.component.html',
  styleUrl: './remove-role.component.css'
})
export class RemoveRoleComponent {
  appUser: AppUser = {
    username: '',
    password: '',
    verifyPassword: '',
    email: '',
    numeroTelephone: '',
  };

  roleEnum: string = '';

  constructor(private adminService: AdminService, private router: Router) {}

  removeRole(): void {
    if (this.roleEnum && this.appUser.username) {
      this.adminService.retirerRole(this.appUser, this.roleEnum).subscribe({
        next: (response) => {
          console.log('Rôle remouvé avec succès', response);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Erreur lors de suppression du rôle', err);
        }
      });
    } else {
      console.warn('Veuillez saisir un utilisateur et sélectionner un rôle');
    }
  }
}
