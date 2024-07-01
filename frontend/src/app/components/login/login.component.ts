import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    const user = { email: this.email, password: this.password };
    this.authService.login(user).subscribe(
      response => {
        this.message = 'Login successful!';
        this.router.navigate(['/']); // Redirect to home page or another route
      },
      error => {
        this.message = error.error.message;
      }
    );
  }
}
