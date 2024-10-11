import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { AppUser } from '../models/user.model';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 // private readonly googleAuthUrl = 'http://localhost:8085/oauth2/authorization/google';


  constructor(private http: HttpClient) {}

/*  loginWithGoogle(): void {
    window.location.href = this.googleAuthUrl;
    this.router.navigateByUrl('/home');
  }*/

 /* login(loginRequest: { username: string, password: string }): Observable<any> {
    this.router.navigateByUrl('/home');
    return this.http.post(`${environment.apiUrl}/login`, loginRequest);

  }*/

  public getUserList(): Observable<any> {
    return this.http.get(environment.apiUrl + '/admin/listUsers');
  }

  createUser(appUser: AppUser): Observable<Array<AppUser>> {
    return this.http.post<Array<AppUser>>(environment.apiUrl + '/admin/createUser', appUser);
  }

}
