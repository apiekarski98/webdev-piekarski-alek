import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;

  username: String;
  password: String;
  verifyPassword: String;
  errorFlag: boolean;
  errorMsg = 'Passwords do not match!';

  constructor(private userService: UserService,
              private router: Router) {

  }

  ngOnInit() {
  }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifyPassword = this.registerForm.value.verifyPassword;
    if (this.password === this.verifyPassword) {
      const user = this.userService.createUser(
        new User('0', this.username, this.password, '', '')
      );
      this.router.navigate(['/profile', user]);

    } else {
      this.errorFlag = true;
    }
  }

}
