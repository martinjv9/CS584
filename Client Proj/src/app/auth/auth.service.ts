import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from './login-request';
import { LoginResponse } from './login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}

function login(loginRequest: LoginRequest): Observable<LoginResponse> {
  
}