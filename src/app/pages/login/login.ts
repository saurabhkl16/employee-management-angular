import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private route: Router,
    private authService: AuthService,
  ) {}

  public handleLogin() {
    if (this.loginForm.valid) {
      const loginData: any = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      console.log("loginData:",loginData);

      this.authService.login(loginData).subscribe({
        next: (response: any) => {
          console.log('Login successful', response);

          // Store JWT token
          localStorage.setItem('token', response.token);

          // Store user information
          localStorage.setItem('email', response.email);
          localStorage.setItem('role', response.role);

          // Navigate to dashboard
          this.route.navigate(['/dashboard']);
        },

        error: (error: any) => {
          console.error('Login error:', error);

          alert(
            error.status === 401
              ? 'Invalid email or password'
              : 'Something went wrong. Please try again.',
          );
        },
      });
    } else {
      alert('Please enter valid login details');
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
