import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, pipe, tap } from 'rxjs';
import { LoginRequest } from './login-request';
import { LoginResponse } from './login-response';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _authStatus = new BehaviorSubject<boolean>(false);
  authStatus = this._authStatus.asObservable();

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    let url = `${environment.baseUrl}api/Admin/Login`;
    return this.http.post<LoginResponse>(url, loginRequest)
    .pipe(tap(loginResult => {
      if(loginResult.success){
        localStorage.setItem("accessToken", loginResult.token);
        this.setAuthStatus(true);
      }
    }));
  }

  logout(){
    localStorage.removeItem("accessToken");
    this.setAuthStatus(false);
  }

  private setAuthStatus(status: boolean) {
    this._authStatus.next(status);
  }

  public isAuthenticated():boolean {
    return localStorage.getItem("accessToken") != null;
  }

}