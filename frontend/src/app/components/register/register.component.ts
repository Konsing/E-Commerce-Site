// import { Component } from '@angular/core';
// import { AuthService } from '../../services/auth.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   username: string = '';
//   email: string = '';
//   password: string = '';

//   constructor(private authService: AuthService) { }

//   async register() {
//     const user = { username: this.username, email: this.email, password: this.password };
//     const result = await this.authService.register(user);
//     console.log(result);
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor() { }

  register() {
    console.log("Registration attempt");
  }

}
