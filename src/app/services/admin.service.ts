import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

  createUser(appUser: AppUser): Observable<any> {
    return this.http.post(environment.apiUrl + '/admin/createUser', appUser,{responseType: 'text'});
  }

  affecterRole(appUser: AppUser, roleEnum: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${environment.apiUrl}/admin/affecterRole?roleEnum=${roleEnum}`, appUser, { headers });
  }

  retirerRole(appUser: AppUser, roleEnum: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${environment.apiUrl}/admin/removeRole?roleEnum=${roleEnum}`, appUser, { headers });
  }
}
