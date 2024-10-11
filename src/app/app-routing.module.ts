import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/auth/login/login.component";
import {ListUserComponent} from "./components/admin/list-user/list-user.component";
import {CreateUserComponent} from "./components/admin/create-user/create-user.component";

const routes: Routes = [
  { path: 'login', component:LoginComponent  },
  { path: 'home', component: ListUserComponent},
  {path: 'createUser', component: CreateUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
