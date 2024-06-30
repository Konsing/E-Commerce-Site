// import { Component } from '@angular/core';
// import { AuthService } from '../../services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   email: string = '';
//   password: string = '';

//   constructor(private authService: AuthService) { }

//   async login() {
//     const user = { email: this.email, password: this.password };
//     const result = await this.authService.login(user);
//     console.log(result);
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() { }

  login() {
    console.log("Login attempt");
  }

}
