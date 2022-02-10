import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username = 'admin';
  password = 'admin';
  isLogged = false;
  constructor(private http: HttpClient) { }

  getUser(): string{
    return this.username;
  }
  getPassword(): string{
    return this.password;
  }
  setStatus(isLogged: boolean): void{
    if (isLogged === true){
      this.isLogged = true;
    }
  }
}

