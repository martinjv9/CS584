import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { LoginRequest } from './login-request';
import { AuthService } from './auth.service';
import { routes } from '../app.routes';
import { environment } from '../../environments/environment.development';



@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {

  form!: FormGroup;


  constructor(private authService: AuthService, private router: Router){
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  onSubmit() {
    let loginRequest = <LoginRequest>{
      userName: this.form.controls["userName"].value,
      password: this.form.controls["password"].value
    };

    this.authService.login(loginRequest).subscribe({
      next: result => {
        if(result.success) {
          this.router.navigate(['/']);
        }
      },
      error: error => console.error(error)
    })

    
  }
  
}
