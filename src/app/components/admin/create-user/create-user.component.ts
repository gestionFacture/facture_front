import { Component } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AdminService} from "../../../services/admin.service";
import {AppUser} from "../../../models/user.model";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})

export class CreateUserComponent {
  appUser: AppUser = {
    username: '',
    password: '',
    verifyPassword:'',
    email: '',
    numeroTelephone: '',
  };

  constructor(
    private adminService: AdminService,
  ) {}


  createUser() {
    this.adminService.createUser(this.appUser).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error('Erreur lors de la création de l’utilisateur :', error);
      }
    );
  }
}
