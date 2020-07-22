import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class FirmadosService {

  private URL = 'http://localhost:3000/api'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  
  getContentIn() {
    return this.http.get<any>(this.URL + '/firmados');
  }
}
