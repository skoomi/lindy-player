import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  navigateToSpotifyLoginUrl() {
    this.http.get('https://lindy-player-backend.herokuapp.com/login').subscribe();
  }
}
