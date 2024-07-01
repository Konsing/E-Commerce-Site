import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    const user = { username: this.username, email: this.email, password: this.password };
    this.authService.register(user).subscribe(
      response => {
        this.message = 'User registered successfully!';
        this.router.navigate(['/login']); // Redirect to login page
      },
      error => {
        this.message = error.error.message;
      }
    );
  }
}
