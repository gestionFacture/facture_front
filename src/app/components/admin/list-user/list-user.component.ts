import {Component, OnInit} from '@angular/core';
import {AppUser} from "../../../models/user.model";
import {AdminService} from "../../../services/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit{
  listUsers: AppUser[]=[];

constructor(private adminService: AdminService,private router: Router,) {
}
  ngOnInit() {
    this.adminService.getUserList().subscribe(
      {
        next:(users) => {this.listUsers = users;},
        error: (err) => {console.log(err);
        }
      }
    );
  }
}
