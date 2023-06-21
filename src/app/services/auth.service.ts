import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import NewUser from '../models/newUser';
import Login from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://192.168.1.9:3000/user/'
  private tokenUrl = 'http://192.168.1.9:3000/token/'

  newUser(newUser: NewUser): Observable<any> {
    return this.http.post(this.apiUrl + 'register', newUser);
  }

  login(login: Login) {
    return this.http.post<any>(this.apiUrl + 'login', login)
  }

  tokenLogin() {
    const token = localStorage.getItem('token')
    return this.http.post(this.apiUrl + 'login-token', {token});
  }

  refreshToken(){
    const oldToken = localStorage.getItem('refresh_token');
    return this.http.put(`${this.tokenUrl}refresh`, { oldToken });
  }
}
