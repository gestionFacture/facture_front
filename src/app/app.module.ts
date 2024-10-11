import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CreateUserComponent } from './components/admin/create-user/create-user.component';
import { UpdateUserComponent } from './components/admin/update-user/update-user.component';
import { ListUserComponent } from './components/admin/list-user/list-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RoleComponent } from './components/admin/role/role.component';
import { RemoveRoleComponent } from './components/admin/remove-role/remove-role.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    UpdateUserComponent,
    ListUserComponent,
    RoleComponent,
    RemoveRoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
