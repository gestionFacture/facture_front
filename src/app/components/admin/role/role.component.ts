import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { AppUser } from '../../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {
  appUser: AppUser = {
    username: '',
    password: '',
    verifyPassword: '',
    email: '',
    numeroTelephone: '',
  };

  roleEnum: string = '';

  constructor(private adminService: AdminService, private router: Router) {}

  affecterRole(): void {
    if (this.roleEnum && this.appUser.username) {
      this.adminService.affecterRole(this.appUser, this.roleEnum).subscribe({
        next: (response) => {
          console.log('Rôle affecté avec succès', response);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Erreur lors de l\'affectation du rôle', err);
        }
      });
    } else {
      console.warn('Veuillez saisir un utilisateur et sélectionner un rôle');
    }
  }
}
