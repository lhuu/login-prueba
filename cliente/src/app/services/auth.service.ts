import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api'

  constructor( 
    private http: HttpClient,
    private router: Router
  ) { }

  signUp(user) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signIn(user) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  In() {
    return !!localStorage.getItem('t');
  }

  getToken() {
    return localStorage.getItem('t');
  }

  Out() {
    localStorage.removeItem('t');
    this.router.navigate(['/signin']);
  }
}
